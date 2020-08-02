import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class ConduitPagesSigninService {
  init(): Promise<State> {
    return Promise.resolve({
      registration: {
        href: '#/signup',
      },
      username: '',
      password: '',
    });
  }

  login(state: State) {
    return fetch('https://conduit.productionready.io/api/users/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: state.username,
          password: state.password,
        },
      }),
    });
  }
}

export class State {
  registration: {
    href: string;
  };
  username: string;
  password: string;
}
