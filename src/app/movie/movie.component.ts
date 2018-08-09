import { Component, ViewChild } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { MovieQuestionComponent } from './question/movie-question.component';
import { AnimateService } from '../shared/service/animate.service';
import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'mdg-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @ViewChild('question') question: MovieQuestionComponent;

  protected time: number;
  protected timer: any;
  protected timerWidth: string;
  protected showControls: boolean = false;
  protected movieFilePath: SafeUrl;

  constructor(private animate: AnimateService, private game: GameService) {
    this.movieFilePath = game.movieFilepath;
    this.game.start();
  }

  onTimeUpdate(time: number) {
    this.time = Math.floor(time);
    this.game.processState(this.time);
    if (this.game.currentAnswers) {
      this.game.currentAnswers ? this.question.startTimer() : this.question.stopTimer();
    }
  }

  toggleControls() {
    this.showControls = !this.showControls;
  }

  showDrinks() {
    return this.game.drinkers && (this.game.currentState === this.game.WAITING_FOR_DRINKS);
  }

  showQuestion() {
    const states = [
      this.game.WAITING_FOR_QUESTION,
      this.game.SHOW_ANSWERS,
      this.game.WAITING_FOR_ANSWERS,
      this.game.SHOW_CORRECT_ANSWER,
      this.game.WAITING_FOR_CORRECT_ANSWER
    ];
    return this.game.currentQuestion && states.includes(this.game.currentState);
  }
}
