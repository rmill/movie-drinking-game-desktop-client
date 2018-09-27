import { Component } from '@angular/core';

import { Player, GameService } from '../../shared/service/game.service'

@Component({
  selector: 'mdg-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css']
})
export class MovieCreditsComponent {

  public mostCorrectAnswers: Player
  public mostWrongAnswers: Player
  public mostMissedAnswers: Player
  public mostDrinks: Player
  public bestAnswerSpeed: Player
  public bestStreak: Player

  constructor(private game: GameService) {}

  ngOnInit() {
    const results = this.game.getStats()
    this.mostCorrectAnswers = results.correct.values()[0]
    this.mostWrongAnswers = results.incorrect.values()[0]
    this.mostMissedAnswers = results.missed.values()[0]
    this.mostDrinks = results.drinks.values()[0]
    this.bestAnswerSpeed = results.speed.values()[0]
    this.bestStreak = results.streak.values()[0]
  }
}
