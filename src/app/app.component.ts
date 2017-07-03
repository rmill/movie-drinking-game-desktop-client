import { Component } from '@angular/core';

import { GameService } from './shared/service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private state: string = 'intro';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.create();
    this.gameService.onStart.subscribe(() => this.state = 'movie');
    this.gameService.onEnd.subscribe(() => this.state = 'credits');
  }

  isIntro() {
    return this.state === 'intro';
  }

  isMovie() {
    return this.state === 'movie';
  }

  isCredits() {
    return this.state === 'credits';
  }
}
