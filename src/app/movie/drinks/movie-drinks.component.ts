import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { AnimateService } from '../../shared/service/animate.service';
import { GameService } from '../../shared/service/game.service';

@Component({
  selector: 'mdg-movie-drinks',
  templateUrl: './movie-drinks.component.html',
  styleUrls: ['./movie-drinks.component.css']
})
export class MovieDrinksComponent {

  protected exitAnimation: string;

  constructor(private animate: AnimateService, private game: GameService) {}

  ngOnDestroy() {
    this.exitAnimation = this.animate.randomExit();
  }

  getRows() {
    if (this.game.drinkers) {
      const chunkSize = 3;
      const drinkers = [];

      for (let i=0; i < this.game.drinkers.length; i += chunkSize) {
        const chunk = this.game.drinkers.slice(i, i + chunkSize);
        drinkers.push(chunk);
      }

      return drinkers;
    }

    return null;
  }
}
