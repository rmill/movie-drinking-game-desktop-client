import { Injectable } from '@angular/core';

import { ElectronService } from './electron.service';
import { Player } from './game.service';

@Injectable()
export class PushNotificationService {

  constructor(private electron: ElectronService) {}

  send(player: Player, event: string, data: any) {
    let message = {
      token: player.fcm_token,
      data: { event, data }
    }

    if (!message.token) return

    this.electron.notifyClient('send-push', message)
  }
}
