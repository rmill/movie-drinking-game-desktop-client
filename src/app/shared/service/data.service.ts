import { Injectable } from '@angular/core';

import { ElectronService } from './electron.service';

@Injectable()
export class DataService {

  constructor(private electron: ElectronService) {}

  create(resource, id, data) {
    this.send(resource, id, 'set', data);
  }

  update(resource, id, data) {
    this.send(resource, id, 'update', data);
  }

  private send(resource, id, action, data) {
    let transaction = {
      action,
      resource: `${resource}/${id}`,
      data
    }

    this.electron.notifyClient('database', transaction);
  }
}
