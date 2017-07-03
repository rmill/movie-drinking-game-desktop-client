import { Component } from '@angular/core';

import { Question, GameService } from '../shared/service/game.service';

@Component({
  selector: 'mdg-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  protected question: Question;
  protected time: number;
  protected movieFilePath: string;
  protected timerWidth: string;

  constructor(private gameService: GameService) {
    gameService.onQuestion.subscribe((question: Question) => this.question = question);
    gameService.onQuestionEnd.subscribe(() => this.question = null);
  }

  onTimeUpdate(time: number) {
    this.gameService.updateTime(time);
    this.time = time;

    const width = 100.0 - (100.0 * ((time - this.question.startTime) / this.question.duration));
    this.timerWidth = `${width}px`;
  }
}
