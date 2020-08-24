import { Injectable } from '@angular/core';

@Injectable()
export class ConduitUserService {
  user;
  get(): Promise<User> {
    return Promise.resolve(this.user);
  }

  set(user): Promise<void> {
    this.user = user;
    return Promise.resolve();
  }
}

export interface User {
  username?: any;
}
