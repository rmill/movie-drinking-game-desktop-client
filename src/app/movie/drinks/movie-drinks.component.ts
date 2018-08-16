import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { AnimateService } from '../../shared/service/animate.service';
import { GameService } from '../../shared/service/game.service';
import { StatisticsService } from '../../shared/service/statistics.service';

@Component({
  selector: 'mdg-movie-drinks',
  templateUrl: './movie-drinks.component.html',
  styleUrls: ['./movie-drinks.component.css']
})
export class MovieDrinksComponent {

  protected exitAnimation: string;

  constructor(
    private animate: AnimateService,
    private game: GameService,
    private statistics: StatisticsService
  ) {}

  fadeOut() {
    this.exitAnimation = 'fadeOut';
  }

  isSociables() {
    return this.statistics.currentDrinks.length === 0;
  }

  getRows() {
    if (this.statistics.currentDrinks) {
      const chunkSize = 3;
      const drinkers = [];

      for (let i=0; i < this.statistics.currentDrinks.length; i += chunkSize) {
        const chunk = this.statistics.currentDrinks.slice(i, i + chunkSize);
        drinkers.push(chunk);
      }

      return drinkers;
    }

    return null;
  }
}
