import { Injectable } from '@angular/core';
const electron = window.require('electron');

@Injectable()
export class ElectronService {
  openFileDialog(title) {
    return electron.remote.dialog.showOpenDialog({ title, properties: ['openFile'] });
  }
}
