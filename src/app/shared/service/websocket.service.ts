import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  on(event: string, callback: Function) {
    this.socket.on(event, callback);
  }

  send(event: string, data?: any) {
    this.socket.emit(event, data);
  }
}
