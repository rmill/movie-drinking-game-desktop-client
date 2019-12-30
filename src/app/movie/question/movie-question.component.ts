import { Component } from '@angular/core';

import { AnimateService } from '../../shared/service/animate.service';
import { GameService, Question } from '../../shared/service/game.service';

@Component({
  selector: 'mdg-movie-question',
  templateUrl: './movie-question.component.html',
  styleUrls: ['./movie-question.component.css']
})
export class MovieQuestionComponent {
  protected question: Question;
  protected timer: any;
  protected timerWidth: string;
  protected enterAnimation: string;

  constructor(private animate: AnimateService, private game: GameService) {}

  ngOnInit() {
    this.timerWidth = '100%';
    this.enterAnimation = this.animate.randomEnter();
    this.question = this.game.currentQuestion;

    let audio = new Audio();
    audio.src = './assets/sounds/boxing-bell.wav';
    audio.load();
    audio.play();
  }

  startTimer() {
    if (!this.timer) {
      const startTime = Date.now();
      const duration = this.game.currentQuestion.duration;
      this.timer = setInterval(() => this.timerWidth = this.getTimerWidth(startTime, duration), 10);
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  showAnswers() {
    const states = [
      this.game.SHOW_ANSWERS,
      this.game.WAITING_FOR_ANSWERS,
      this.game.SHOW_CORRECT_ANSWER,
      this.game.WAITING_FOR_CORRECT_ANSWER
    ];

    return states.includes(this.game.currentState);
  }

  getTimerWidth(startTime: number, duration: number) {
    const now = Date.now();
    const progressInSeconds = (now - startTime) / 1000;
    const timerPercent = 100 * progressInSeconds / duration;
    return Math.max(100 - timerPercent, 0) + '%';
  }

  isCorrect(answer: number) {
    const states = [
      this.game.SHOW_CORRECT_ANSWER,
      this.game.WAITING_FOR_CORRECT_ANSWER
    ];

    if (states.includes(this.game.currentState)) {
      return this.game.currentQuestion.correct_answers.includes(answer);
    }

    return false;
  }
}
