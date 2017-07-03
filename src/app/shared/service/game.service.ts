import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { WebsocketService } from './websocket.service';

@Injectable()
export class GameService {

  private onStartEmitter = new Subject<null>();
  private onEndEmitter = new Subject<null>();
  private onNewPlayerEmitter = new Subject<Player>();
  private onQuestionEmitter = new Subject<Question>();
  private onQuestionEndEmitter = new Subject<null>();
  private onShowAnswersEmitter = new Subject<null>();
  private onShowCorrectAnswerEmitter = new Subject<null>();
  private onCreditsEmitter = new Subject<Credits>();

  public onStart: Observable<null> = this.onStartEmitter.asObservable();
  public onEnd: Observable<null> = this.onEndEmitter.asObservable();
  public onNewPlayer: Observable<Player> = this.onNewPlayerEmitter.asObservable();
  public onQuestion: Observable<Question> = this.onQuestionEmitter.asObservable();
  public onQuestionEnd: Observable<null> = this.onQuestionEndEmitter.asObservable();
  public onShowAnswers: Observable<null> = this.onShowAnswersEmitter.asObservable();
  public onShowCorrectAnswer: Observable<null> = this.onShowCorrectAnswerEmitter.asObservable();
  public onCredits: Observable<Credits> = this.onCreditsEmitter.asObservable();

  constructor(protected websocket: WebsocketService) {
    websocket.on('start', () => this.onStartEmitter.next());
    websocket.on('end', () => this.onEndEmitter.next());
    websocket.on('new-player', (player: Player) => this.onNewPlayerEmitter.next(player));
    websocket.on('question', (question: Question) => this.onQuestionEmitter.next(question));
    websocket.on('question-end', () => this.onQuestionEndEmitter.next());
    websocket.on('show-answers', () => this.onShowAnswersEmitter.next());
    websocket.on('show-correct-answer', () => this.onShowCorrectAnswerEmitter.next());
  }

  create() {
    this.websocket.send('create');
  }

  start() {
    this.websocket.send('start');
  }

  updateTime(time: number) {
    this.websocket.send('time', time);
  }
}

export interface Player {
  id: number;
  name: string;
}

export interface Question {
  text: string;
  startTime: number;
  duration: number;
  answers: Answer[];
}

export interface Answer {
  text: string;
}

export interface Credits {
  most
}
