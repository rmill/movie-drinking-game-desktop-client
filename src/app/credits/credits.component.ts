import { Component } from '@angular/core';

import { Credits, GameService } from '../shared/service/game.service';

@Component({
  selector: 'mdg-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent {

  protected credits: Credits;

  constructor(private gameService: GameService) {
    gameService.onCredits.subscribe((credits: Credits) => this.credits = credits);
  }
}
