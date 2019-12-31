import { Component } from '@angular/core';

import { Player, GameService } from '../../shared/service/game.service'

@Component({
  selector: 'mdg-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css']
})
export class MovieCreditsComponent {

  public scores = {};
  protected anthem;
  protected winningTeam;
  protected fadeInInterval;

  constructor(private game: GameService) {}

  ngOnInit() {
    const results = this.game.getStats();
    this.scores = results.teamScores;
    this.winningTeam = this.scores['usa'] >= this.scores['ussr'] ? 'usa' : 'ussr'

    this.anthem = new Audio();
    this.anthem.src = `./assets/sounds/${this.winningTeam}-anthem.mp3`;
    this.anthem.volume = 0;
    this.anthem.load();
    this.anthem.play();

    this.fadeInInterval = setInterval(() => this.fadeIn(), 100)
  }

  fadeIn() {
    const maxVolume = this.winningTeam == 'usa' ? 0.4 : 0.2;
    const increment = this.winningTeam == 'usa' ? 0.02 : 0.01;

    this.anthem.volume = Math.min(this.anthem.volume + increment, maxVolume);
    if (this.anthem.volume >= maxVolume) clearInterval(this.fadeInInterval)
  }
}
