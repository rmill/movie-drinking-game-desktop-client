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
  public bestAnswerSpeedText: string
  public bestStreak: Player

  constructor(private game: GameService) {}

  ngOnInit() {
    const results = this.game.getStats()
    this.mostCorrectAnswers = this.getBest(results.correct)
    this.mostWrongAnswers = this.getBest(results.incorrect)
    this.mostMissedAnswers = this.getBest(results.missed)
    this.mostDrinks = this.getBest(results.drinks)
    this.bestStreak = this.getBest(results.streak)
    this.bestAnswerSpeed = this.getBest(results.speed)
    this.bestAnswerSpeedText = (this.bestAnswerSpeed.answer_speed / 1000).toFixed(2)
  }

  private getBest(result) {
    const topPlayers = result[0]

    if (topPlayers.length > 1) {
      let topPlayer

      for (let player of topPlayers) {
        if (!topPlayer || player.answer_speed > topPlayer.answer_speed) {
          topPlayer = player
        }
      }

      return topPlayer
    }

    return topPlayers[0]
  }
}
