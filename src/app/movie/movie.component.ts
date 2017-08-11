import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { Question, GameService } from '../shared/service/game.service';

@Component({
  selector: 'mdg-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  protected question: Question;
  protected time: number;
  protected movieFilePath: SafeUrl;
  protected timerWidth: string;

  constructor(private gameService: GameService) {
    this.movieFilePath = gameService.movieFilepath;
    gameService.onQuestion.subscribe((question: Question) => this.question = question);
    gameService.onQuestionEnd.subscribe(() => this.question = null);
  }

  onTimeUpdate(time: number) {
    this.time =  Math.floor(time);
    this.gameService.updateTime(this.time);
  }
}
