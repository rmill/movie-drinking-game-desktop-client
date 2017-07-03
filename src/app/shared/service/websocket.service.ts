import { Injectable } from '@angular/core';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() {
    this.socket = io('');
  }

  on(event: string, callback: Function) {
    this.socket.on(event, callback);
  }

  send(event: string, data?: any) {
    this.socket.emit(event, data);
  }
}
