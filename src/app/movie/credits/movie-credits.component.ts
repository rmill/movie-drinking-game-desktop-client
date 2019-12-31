import { Component } from '@angular/core';

import { Player, GameService } from '../../shared/service/game.service'

@Component({
  selector: 'mdg-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css']
})
export class MovieCreditsComponent {

  public scores = {};

  constructor(private game: GameService) {}

  ngOnInit() {
    const results = this.game.getStats();
    this.scores = results.teamScores;
  }
}
