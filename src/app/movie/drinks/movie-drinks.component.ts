import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

import { AnimateService } from '../../shared/service/animate.service';
import { GameService, Player } from '../../shared/service/game.service';
import { StatisticsService } from '../../shared/service/statistics.service';

@Component({
  selector: 'mdg-movie-drinks',
  templateUrl: './movie-drinks.component.html',
  styleUrls: ['./movie-drinks.component.css']
})
export class MovieDrinksComponent {

  protected exitAnimation: string;
  protected drinksSub: Subscription;
  protected drinkers: Player[] = [];

  constructor(
    private animate: AnimateService,
    private game: GameService,
    private statistics: StatisticsService
  ) {}

  ngOnInit() {
    this.drinksSub = this.statistics.drinkers.subscribe(drinkers => this.drinkers = drinkers)
  }

  ngOnDestroy() {
    this.drinksSub.unsubscribe()
  }

  fadeOut() {
    this.exitAnimation = 'fadeOut';
  }

  isSociables() {
    return this.drinkers.length === 0;
  }

  getRows() {
    if (this.drinkers) {
      const chunkSize = 3;
      const rows = [];

      for (let i=0; i < this.drinkers.length; i += chunkSize) {
        const chunk = this.drinkers.slice(i, i + chunkSize);
        rows.push(chunk);
      }

      return rows;
    }

    return null;
  }
}
