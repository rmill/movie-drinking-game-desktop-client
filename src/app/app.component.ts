import { Component } from '@angular/core';

import { ElectronService } from './shared/service/electron.service';
import { GameService } from './shared/service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private state: string = 'intro';

  constructor(private electron: ElectronService, private gameService: GameService) {}

  ngOnInit() {
    process.env = this.electron.getEnvironment()
    this.gameService.create();
  }
}
