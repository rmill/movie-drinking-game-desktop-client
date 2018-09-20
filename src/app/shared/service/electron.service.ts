import { Injectable } from '@angular/core';
const electron = window.require('electron');

@Injectable()
export class ElectronService {
  openFileDialog(title: string) {
    return electron.remote.dialog.showOpenDialog({ title, properties: ['openFile'] });
  }

  notifyClient(event: string, message: any = {}) {
    electron.ipcRenderer.send(event, message)
  }
}
