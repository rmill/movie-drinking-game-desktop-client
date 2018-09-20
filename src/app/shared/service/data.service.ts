import { Injectable } from '@angular/core';

import { ElectronService } from './electron.service';

@Injectable()
export class DataService {

  constructor(private electron: ElectronService) {}

  bind(resource, func) {
    this.electron.listen(`${resource}-child_added`, func)
    this.send(resource, null, 'bind', { event: 'child_added' })
  }

  create(resource, id, data) {
    this.send(resource, id, 'set', data);
  }

  update(resource, id, data) {
    this.send(resource, id, 'update', data);
  }

  private send(resource, id, action, data) {
    let transaction = {
      action,
      resource: id ? `${resource}/${id}` : resource,
      data
    }

    this.electron.notifyClient('database', transaction);
  }
}
