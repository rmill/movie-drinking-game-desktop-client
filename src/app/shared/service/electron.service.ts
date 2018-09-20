import { Injectable } from '@angular/core';
const electron = window.require('electron');

@Injectable()
export class ElectronService {

  listen(event: string, func: any) {
    electron.ipcRenderer.on(event, (e, result) => func(result))
  }

  notifyClient(event: string, message: any = {}) {
    electron.ipcRenderer.send(event, message)
  }

  openFileDialog(title: string) {
    return electron.remote.dialog.showOpenDialog({ title, properties: ['openFile'] });
  }
}
