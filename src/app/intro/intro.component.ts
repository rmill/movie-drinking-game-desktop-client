import { Component, EventEmitter, Output } from '@angular/core';

import { GameService, Player } from '../shared/service/game.service';

@Component({
  selector: 'mdg-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  protected players: Player[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.onNewPlayer.subscribe((player: Player) => this.players.push(player));
  }

  getPlayerLocation(index): string {
    const positions = [
      {top: 89, left: 200},
      {top: 800, left: 1500},
      {top: 610, left: 39},
      {top: 212, left: 1300},
      {top: 319, left: 299},
      {top: 500, left: 1450},
      {top: 900, left: 300},
      {top: 58, left: 1500},
      {top: 481, left: 110},
      {top: 621, left: 1400},
      {top: 700, left: 200},
      {top: 400, left: 1400},
      {top: 174, left: 114},
      {top: 900, left: 1600},
      {top: 800, left: 76}
    ];

    return `top: ${positions[index].top}px; left: ${positions[index].left}`;
  }

  start() {
    this.gameService.changeState('movie');
  }
}
