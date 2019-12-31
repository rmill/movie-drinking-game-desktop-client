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
  protected scoresSub: Subscription;
  protected drinkers: Player[] = [];
  protected scores = {};
  protected drinksOver: boolean = false;

  constructor(
    private animate: AnimateService,
    private game: GameService,
    private statistics: StatisticsService
  ) {}

  ngOnInit() {
    this.scoresSub = this.statistics.teamScores.subscribe(scores => this.scores = scores)
    setTimeout(() => this.drinksOver = true, 2000);
  }

  ngOnDestroy() {
    this.scoresSub.unsubscribe()
  }

  fadeOut() {
    this.exitAnimation = 'fadeOut';
  }
}
