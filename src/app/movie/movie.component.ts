import { Component, ViewChild } from '@angular/core'
import { SafeUrl } from '@angular/platform-browser'

import { MovieQuestionComponent } from './question/movie-question.component'
import { GameService } from '../shared/service/game.service'

@Component({
  selector: 'mdg-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @ViewChild('question') question: MovieQuestionComponent

  protected movieFilePath: SafeUrl
  protected muteVideo: boolean
  protected showControls: boolean = false
  protected showTime: boolean
  protected time: number = 0
  protected volume: number = 1
  protected fadeOutInterval = null

  constructor(private game: GameService) {
    this.muteVideo = process.env.NODE_ENV === 'dev'
    this.showTime = process.env.NODE_ENV === 'testing'
    this.movieFilePath = game.movieFilepath
    this.game.start()
  }

  onSeeked(time: number) {
    this.onTimeUpdate(time)
    this.game.sendState()
  }

  onTimeUpdate(time: number) {
    this.time = Math.floor(time)
    this.game.processState(this.time)

    const states = [
      this.game.SHOW_ANSWERS,
      this.game.WAITING_FOR_ANSWERS,
      this.game.SHOW_CORRECT_ANSWER
    ]

    if (this.question) {
      states.includes(this.game.currentState) ? this.question.startTimer() : this.question.stopTimer()
    }
  }

  toggleControls() {
    this.showControls = !this.showControls
  }

  showDrinks() {
    return this.game.isState(this.game.WAITING_FOR_DRINKS)
  }

  showQuestion() {
    const states = [
      this.game.WAITING_FOR_QUESTION,
      this.game.SHOW_ANSWERS,
      this.game.WAITING_FOR_ANSWERS,
      this.game.SHOW_CORRECT_ANSWER,
      this.game.WAITING_FOR_CORRECT_ANSWER
    ]
    return this.game.currentQuestion && states.includes(this.game.currentState)
  }

  showCredits() {
    let showCredits = this.game.isState(this.game.END_GAME)

    if (showCredits && this.volume > 0 && this.fadeOutInterval == null) {
      this.fadeOutInterval = setInterval(() => this.fadeout(), 100);
    }

    return showCredits
  }

  fadeout() {
    console.log('fadeout', this.volume)
    this.volume = Math.max(0, this.volume - 0.1);
    if (this.volume <= 0) clearInterval(this.fadeOutInterval)
  }
}
