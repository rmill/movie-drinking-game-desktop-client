import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';
const fs = window.require('fs');
const random = window.require('randomstring');

import { DataService } from './data.service';
import { ElectronService } from './electron.service';
import { PushNotificationService } from './push-notification.service';
import { StatisticsService } from './statistics.service';

@Injectable()
export class GameService {
  readonly NEW_GAME = 'new_game';
  readonly IDLE = 'idle';
  readonly SHOW_QUESTION = 'show_question';
  readonly WAITING_FOR_QUESTION = 'waiting_for_question';
  readonly SHOW_ANSWERS = 'show_answers';
  readonly WAITING_FOR_ANSWERS = 'waiting_for_answers';
  readonly SHOW_CORRECT_ANSWER = 'show_correct_answer';
  readonly WAITING_FOR_CORRECT_ANSWER = 'waiting_for_correct_answer';
  readonly HIDE_QUESTION = 'hide_question';
  readonly WAITING_FOR_END = 'waiting_for_end';
  readonly END_GAME = 'end_game';

  public credits: Credits;
  public currentQuestion: Question;
  public currentState: string = this.NEW_GAME;
  public gameFilepath: string;
  public id: string;
  public movieFilepath: SafeUrl;
  public players: ReplaySubject<Player[]>

  private currentAnswers: any;
  private currentTime: number = 0;
  private endTime: number;
  private nextQuestion: Question;
  private questions: any;
  private rules: Array<string>;
  private sentNotification: boolean = false;
  private _players: any = new Map();

  constructor(
    private data: DataService,
    private electron: ElectronService,
    private pushNotification: PushNotificationService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private statistics: StatisticsService
  ) {
    this.players = new ReplaySubject(1)
    this.gameFilepath = this.electron.getEnvironment().gameFilepath;
    this.movieFilepath = this.sanitizer.bypassSecurityTrustResourceUrl(this.electron.getEnvironment().movieFilepath);
  }

  create() {
    var gameJson = fs.readFileSync(this.gameFilepath);
    var gameData = JSON.parse(gameJson.toString());

    this.endTime = gameData.end_time;
    this.rules = gameData.rules;
    this.questions = {};

    for (let question of gameData.questions) {
      question.duration = question.duration ? question.duration : 15

      if (
        question.shuffle_answers === undefined ||
        question.shuffle_answers
      ) {
        this.shuffle(question);
      }

      this.questions[question.movie_time] = question
    };

    this.id = random.generate();

    let game = {
      name: gameData.name,
      rules: this.rules,
      state: this.currentState
    }

    this.data.create('game', this.id, game)
    this.data.bind('player', null, 'child_added', player => this.addPlayer(player))
    this.data.bind('answer', null, 'child_added', answer => this.answer(answer))
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  addPlayer(player: Player) {
    if (!this.getPlayer(player.id)) {
      console.log('addPlayer', player)
      this._players[player.id] = player
      this.players.next(this.getPlayers());
      this.data.bind('player', player.id, 'value', player => this._players[player.id] = player)
      this.pushNotification.subscribe(this.id, player.fcm_token)
    }
  }

  getPlayer(id: string) {
    for (const i in this._players) {
      const player = this._players[i];
      if (player.id === id) {
        return player;
      }
    }

    return null;
  }

  getPlayers() {
    const players = []

    for (const id in this._players) {
      players.push(this._players[id])
    }

    return players
  }

  sendState() {
    let answers = null;

    if (this.currentQuestion) {
      answers = this.currentQuestion.answers.map(a => a.text);
    }

    let state = {
      answers,
      question: this.currentQuestion,
      rules: this.rules,
      seconds_to_next_question: this.secondsTillNextQuestion(),
      state: this.currentState
    }

    this.data.update('game', this.id, state)
  }

  start() {
    console.log('starting game');
    this.currentState = this.IDLE;
    this.clearQuestion();
    this.sendState();
  }

  processState(time) {
    this.currentTime = time;

    switch(this.currentState) {
      case this.NEW_GAME:
        break;
      case this.IDLE:
        this.idle(time); break;
      case this.WAITING_FOR_QUESTION:
        const questionTime = this.currentQuestion.movie_time + 5;
        this.waiting(time, questionTime, this.SHOW_ANSWERS); break;
      case this.SHOW_ANSWERS:
        this.showAnswers(); break;
      case this.WAITING_FOR_ANSWERS:
        const answerTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5;
        this.waiting(time, answerTime, this.SHOW_CORRECT_ANSWER); break;
      case this.SHOW_CORRECT_ANSWER:
        this.showCorrectAnswers(); break;
      case this.WAITING_FOR_CORRECT_ANSWER:
        const correctTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5 + 5;
        this.waiting(time, correctTime, this.HIDE_QUESTION); break;
      case this.HIDE_QUESTION:
        this.hideQuestion(); break;
      case this.WAITING_FOR_END:
        this.waiting(time, this.endTime, this.END_GAME); break;
      case this.END_GAME:
        this.endGame();
    }
  }

  idle(time) {
    if (this.questions[time]) {
      this.showQuestion(this.questions[time]);
      return;
    }

    // Update the phone client every minute before the next question
    const secondsTillNextQuestion = this.secondsTillNextQuestion()
    if (secondsTillNextQuestion % 60 === 0) {
      this.sendState();

      if (secondsTillNextQuestion / 60 == 1 && !this.sentNotification){
        this.sentNotification = true;
        this.pushNotification.send(this.id, 'Drink Up Cinema', 'Question coming up...')
      }
    }
  }

  showQuestion(question: Question) {
    console.log('show question:', question.text);
    this.currentQuestion = question;
    this.currentState = this.WAITING_FOR_QUESTION;
    this.currentAnswers = {};
    this.sendState();
  }

  showAnswers() {
    console.log('show answers');
    this.currentState = this.WAITING_FOR_ANSWERS;
    this.currentQuestion.start_time = Date.now()
    this.sendState();
  }

  showCorrectAnswers() {
    console.log('show correct answer');
    this.currentState = this.WAITING_FOR_CORRECT_ANSWER;

    this.statistics.process(this.currentQuestion, this.currentAnswers, this.getPlayers());

    for (const player of this.getPlayers()) {
      this.data.update('player', player.id, player)
    }

    this.sendState();
  }

  hideQuestion() {
    console.log('hide question');
    this.clearQuestion();
    this.currentState = this.nextQuestion ?  this.IDLE : this.WAITING_FOR_END;
    this.sendState();
  }

  getStats() {
    return this.statistics.getResults(this.getPlayers());
  }

  endGame() {
    this.sendState();
  }

  answer(answer: Answer) {
    let states = [this.SHOW_ANSWERS, this.WAITING_FOR_ANSWERS];

    if (!states.includes(this.currentState)) return;

    if (this.currentAnswers[answer.player_id]) return;

    answer.speed = Date.now() - this.currentQuestion.start_time

    console.log('answer', answer);
    this.currentAnswers[answer.player_id] = answer;
  }

  clearQuestion() {
    let questionIndex = null;
    const keys = [];
    for(var i in this.questions) keys.push(Number(i));

    if (this.currentQuestion) {
      questionIndex = keys.indexOf(this.currentQuestion.movie_time) + 1;
    } else {
      questionIndex = 0;
    }

    this.nextQuestion = (questionIndex <= keys.length) ? this.questions[keys[questionIndex]] : null;
    this.currentQuestion = null;
    this.currentAnswers = null;
    this.sentNotification = false;

    this.data.delete('answer')
  }

  waiting(currentTime, endTime, nextState) {
    if (currentTime >= endTime) {
      this.currentState = nextState;
    }
  }

  secondsTillNextQuestion() {
    if (!this.nextQuestion) {
      return 0;
    }

    return Math.max(0, this.nextQuestion.movie_time - this.currentTime);
  }

  isState(state: string) {
    return this.currentState == state;
  }
}

export interface Player {
  answer_speed: number;
  best_streak: number;
  correct_answers: number;
  current_streak: number;
  drinks: number;
  fcm_token: string;
  id: string;
  incorrect_answers: number;
  missed_answers: number;
  name: string;
}

export interface Question {
  answers: Array<any>;
  duration: number;
  movie_time: number;
  start_time?: number;
  text: string;
}

export interface Answer {
  id: number;
  player_id: string;
  speed?: number;
}

export interface Credits {
  mostCorrect: string;
  mostIncorrect: string;
  mostMissed: string;
  mostDrinks: string;
  quickestAnswers: string;
  longestStreak: string;
}
