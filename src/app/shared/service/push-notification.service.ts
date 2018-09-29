import { Injectable } from '@angular/core';

import { ElectronService } from './electron.service';
import { Player } from './game.service';

@Injectable()
export class PushNotificationService {

  constructor(private electron: ElectronService) {}

  send(topic, title: string, body: string) {
    let params = [{
      notification: { title, body },
      topic: topic
    }]

    this.electron.notifyClient('push-notification', { action: 'send', params })
  }

  subscribe(topic, token) {
    if (!token) return

    let params = [[token], topic]
    this.electron.notifyClient('push-notification', { action: 'subscribeToTopic', params })
  }
}
