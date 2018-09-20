import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  readonly SHOW_DRINKS = 'show_drinks';
  readonly WAITING_FOR_DRINKS = 'waiting_for_drinks';
  readonly HIDE_QUESTION = 'hide_question';
  readonly WAITING_FOR_END = 'waiting_for_end';
  readonly END_GAME = 'end_game';

  private currentAnswers: any;
  private currentTime: number = 0;
  private endTime: number;
  private nextQuestion: Question;
  private questions: any;
  private rules: Array<string>;

  public credits: Credits;
  public currentQuestion: Question;
  public currentState: string = this.NEW_GAME;
  public gameFilepath: string;
  public id: string;
  public movieFilepath: SafeUrl;
  public players: Array<Player> = []

  constructor(
    private data: DataService,
    private electron: ElectronService,
    private pushNotification: PushNotificationService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private statistics: StatisticsService
  ) {
    this.gameFilepath = this.electron.openFileDialog('Select game file')[0];
    this.movieFilepath = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.electron.openFileDialog('Select movie file')[0]
    );
  }

  create() {
    var gameJson = fs.readFileSync(this.gameFilepath);
    var gameData = JSON.parse(gameJson.toString());

    this.endTime = gameData.end_time;
    this.rules = gameData.rules;
    this.questions = {};

    for (let question of gameData.questions) {
      question.drink_multiplyer = this.getDrinkMultiplyer()
      this.questions[question.movie_time] = question;
    };

    this.id = random.generate();

    let game = {
      name: gameData.name,
      rules: this.rules,
      state: this.currentState
    }

    this.electron.notifyClient('create-game', this.id)
    this.data.create('game', this.id, game)
  }

  addPlayer(player: Player) {
    if (!this.getPlayer(player.id)) {
      this.players.push(player)
    }
  }

  getPlayer(id: string) {
    for (let i of this.players) {
      if (i.id == id) {
        return i;
      }
    }

    return null;
  }

  sendState() {
    let state = {
      answers: this.currentQuestion ? this.currentQuestion.answers : null,
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
        var correctTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5 + 5;
        this.waiting(time, correctTime, this.SHOW_DRINKS); break;
      case this.SHOW_DRINKS:
        this.showDrinks(); break;
      case this.WAITING_FOR_DRINKS:
        var drinksTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5 + 5 + 5;
        this.waiting(time, drinksTime, this.HIDE_QUESTION); break;
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
    if (this.secondsTillNextQuestion() % 60 === 0) {
      this.sendState();
    }
  }

  showQuestion(question: Question) {
    console.log('show question:', question.text);
    this.currentQuestion = question;
    this.currentAnswers = {};
    this.currentState = this.WAITING_FOR_QUESTION;
    this.sendState();
  }

  showAnswers() {
    console.log('show answers');
    this.currentState = this.WAITING_FOR_ANSWERS;
    this.sendState();
  }

  showCorrectAnswers() {
    console.log('show correct answer');
    this.currentState = this.WAITING_FOR_CORRECT_ANSWER;
    this.statistics.process(this.currentQuestion, this.currentAnswers);
    this.sendState();
  }

  showDrinks() {
    console.log('show drinks');
    this.currentState = this.WAITING_FOR_DRINKS;
    this.sendState();
  }

  hideQuestion() {
    console.log('hide question');
    this.clearQuestion();
    this.currentState = this.nextQuestion ?  this.IDLE : this.WAITING_FOR_END;
    this.sendState();
  }

  endGame() {
    this.statistics.compile();
    this.sendState();
  }

  answer(answer: Answer) {
    let states = [this.SHOW_QUESTION, this.WAITING_FOR_QUESTION];

    if (!states.includes(this.currentState)) return;

    if (this.currentAnswers[answer.id]) return;

    console.log('answer', answer);
    this.currentAnswers[answer.id] = answer;
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

  getDrinkMultiplyer() {
    let minMultiplyer = 1;
    let maxMultiplyer = 3;
    let slope = Math.pow(Math.random(), 2.2);
    let multipler = (slope * (maxMultiplyer - minMultiplyer)) + minMultiplyer;
    let roundedMultipler = Math.round(multipler * 10) / 10;

    return roundedMultipler;
  }
}

export interface Player {
  id: string;
  name: string;
  fcm_token: string;
}

export interface Question {
  text: string;
  movie_time: number;
  duration: number;
  answers: Array<string>;
  correct_answers: Array<number>;
  drink_multiplyer: number;
}

export interface Answer {
  id: string;
  answer: number;
}

export interface Credits {
  mostCorrect: string;
  mostIncorrect: string;
  mostMissed: string;
  mostDrinks: string;
  quickestAnswers: string;
  longestStreak: string;
}
