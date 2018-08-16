import { Injectable } from '@angular/core';

import { Player } from './game.service';

@Injectable()
export class PushNotificationService {

  send(player: Player, event: string, data: any) {
    let message = {
      token: player.fcm_token,
      data: { event, data }
    }

    electron.ipcRenderer.send('send-push', message)
  }
}
