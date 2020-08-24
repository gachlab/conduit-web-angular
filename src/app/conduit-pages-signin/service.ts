import { Injectable } from '@angular/core';
import { ConduitUserService } from '../user.service';

@Injectable()
export class ConduitPagesSigninService {
  constructor(private userService: ConduitUserService) {}

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
    const { errors, ...noErrorState } = state;
    return (input) =>
      fetch('https://conduit.productionready.io/api/users/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: input.username,
            password: input.password,
          },
        }),
      })
        .then((response) => response.json())
        .then((response) =>
          response.errors
            ? {
                errors: Object.keys(response.errors).reduce(
                  (accumulator, error) => {
                    response.errors[error].forEach((value) =>
                      accumulator.push(error + ' ' + value)
                    );
                    return accumulator;
                  },
                  []
                ),
              }
            : this.userService.set(response.user).then(() => response)
        )
        .then((response) => Object.assign({}, noErrorState, input, response));
  }
}

export class State {
  registration: {
    href: string;
  };
  username: string;
  password: string;
  errors?: string[];
  user?: any;
}
