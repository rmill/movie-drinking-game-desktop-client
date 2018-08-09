import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { AnimateService } from '../../shared/service/animate.service';
import { GameService } from '../../shared/service/game.service';

@Component({
  selector: 'mdg-movie-question',
  templateUrl: './movie-question.component.html',
  styleUrls: ['./movie-question.component.css']
})
export class MovieQuestionComponent {
  protected timer: any;
  protected timerWidth: string;
  protected enterAnimation: string;

  constructor(private animate: AnimateService, private game: GameService) {}

  ngOnInit() {
    this.timerWidth = '100%';
    this.enterAnimation = this.animate.randomEnter();
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

  getTimerWidth(startTime: number, duration: number) {
    const now = Date.now();
    const progressInSeconds = (now - startTime) / 1000;
    const timerPercent = 100 * progressInSeconds / duration;
    return Math.max(100 - timerPercent, 0) + '%';
  }

  isCorrect(answer: number) {
    if (this.game.currentCorrectAnswers) {
      return this.game.currentCorrectAnswers.includes(answer);
    }
    return false;
  }
}
