import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { environment } from '../../../environments/environment';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() {
    this.socket = io(environment.websocket_url, { transports: ['websocket', 'polling'] });
  }

  on(event: string, callback: Function) {
    this.socket.on(event, (data) => {
      console.log(event, data);
      return callback(data);
    });
  }

  send(event: string, data?: any) {
    this.socket.emit(event, data);
  }
}
