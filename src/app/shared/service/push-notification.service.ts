import { Injectable } from '@angular/core';

import { ElectronService } from './electron.service';
import { Player } from './game.service';

@Injectable()
export class PushNotificationService {

  constructor(private electron: ElectronService) {}

  send(title: string, body: string) {
    let params = [{
      notification: { title, body },
      topic: 'push'
    }]

    this.electron.notifyClient('push-notification', { action: 'send', params })
  }

  subscribe(token) {
    let params = [[token], 'push']
    this.electron.notifyClient('push-notification', { action: 'subscribeToTopic', params })
  }
}
