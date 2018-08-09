import { Component } from '@angular/core';

import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'mdg-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent {
  constructor(private game: GameService) {}
}
