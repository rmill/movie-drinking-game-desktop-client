import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
const fs = window.require('fs');

import { ElectronService } from './electron.service';
import { WebsocketService } from './websocket.service';

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
  readonly END_GAME = 'end_game';

  private nextQuestion: Question;
  private endTime: number;
  private questions: any;

  public credits: Credits;
  public currentQuestion: Question;
  public currentAnswers: Array<string>;
  public currentCorrectAnswers: Array<number>;
  public currentState: string = this.NEW_GAME;
  public drinkers: Array<string>;
  public gameFilepath: string;
  public movieFilepath: SafeUrl;
  public numDrinks: number;
  public players: Array<Player> = []

  constructor(
    protected websocket: WebsocketService,
    private electron: ElectronService,
    private router: Router,
    private sanitizer: DomSanitizer
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
    this.questions = {};

    for (let question of gameData.questions) {
      this.questions[question.movie_time] = question;
    };

    this.websocket.send('create-game', { name: gameData.name });
    this.websocket.on('new-player', (player: Player) => { this.addPlayer(player) });
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

  start() {
    this.currentState = this.IDLE;
    this.clearQuestion();
  }

  processState(time) {
    switch(this.currentState) {
      case this.NEW_GAME:
        break;
      case this.IDLE:
        this.idle(time); break;
      case this.SHOW_QUESTION:
        this.showQuestion(this.currentQuestion); break;
      case this.WAITING_FOR_QUESTION:
        const questionTime = this.currentQuestion.movie_time + 5;
        this.waiting(time, questionTime, this.SHOW_ANSWERS); break;
      case this.SHOW_ANSWERS:
        this.showAnswers(this.currentQuestion.answers); break;
      case this.WAITING_FOR_ANSWERS:
        const answerTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5;
        this.waiting(time, answerTime, this.SHOW_CORRECT_ANSWER); break;
      case this.SHOW_CORRECT_ANSWER:
        this.showCorrectAnswers(this.currentQuestion.correct_answers); break;
      case this.WAITING_FOR_CORRECT_ANSWER:
        var correctTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5 + 5;
        this.waiting(time, correctTime, this.SHOW_DRINKS); break;
      case this.SHOW_DRINKS:
        this.showDrinks(); break;
      case this.WAITING_FOR_DRINKS:
        var drinksTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5 + 5 + 5;
        this.waiting(time, drinksTime, this.HIDE_QUESTION); break;
      case this.HIDE_QUESTION:
        this.hideQuestion();break;
    }
  }

  idle(time) {
    if (this.questions[time]) {
      this.currentQuestion = this.questions[time];
      this.currentState = this.SHOW_QUESTION;
    }

    if (time >= this.endTime) {
      console.log('ending game');
      this.endGame();
    }
  }

  showQuestion(question) {
    console.log('show question:', question.text);
    this.currentState = this.WAITING_FOR_QUESTION;
  }

  showAnswers(answers: Array<string>) {
    console.log('show answers');
    this.currentState = this.WAITING_FOR_ANSWERS;
    this.currentAnswers = answers;
  }

  showCorrectAnswers(answers: Array<number>) {
    console.log('show correct answer');
    this.currentCorrectAnswers = answers;
    this.currentState = this.WAITING_FOR_CORRECT_ANSWER;
  }

  showDrinks() {
    console.log('show drinks');
    this.currentState = this.WAITING_FOR_DRINKS;
  }

  hideQuestion() {
    console.log('hide question');
    this.currentState = this.IDLE;
    this.clearQuestion();
  }

  endGame() {
    this.currentState = this.END_GAME;
    this.router.navigateByUrl('/credits');
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
    this.currentCorrectAnswers = null;
    this.drinkers = null;
  }

  waiting(currentTime, endTime, nextState) {
    if (currentTime >= endTime) {
      this.currentState = nextState;
    }
  }
}

export interface State {
  credits: Credits;
  drinkers: Array<string>;
  numDrinks: number;
  players: any;
}

export interface Player {
  id: string;
  name: string;
}

export interface Question {
  text: string;
  movie_time: number;
  duration: number;
  answers: Array<string>;
  correct_answers: Array<number>;
}

export interface Credits {
  mostCorrect: string;
  mostIncorrect: string;
  mostMissed: string;
  mostDrinks: string;
  quickestAnswers: string;
  longestStreak: string;
}
