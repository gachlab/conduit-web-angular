import { Injectable } from '@angular/core';

@Injectable()
export class ConduitPagesSignupService {
  constructor() {}

  init(): Promise<State> {
    return Promise.resolve({
      name: 'Sign Up',
      links: { login: { href: '#login', text: 'Have an account?' } },
      data: [
        { type: 'text', placeholder: 'Username', value: '' },
        { type: 'email', placeholder: 'Email', value: '' },
        { type: 'password', placeholder: 'Password', value: '' },
      ],
    });
  }

  signup(input: {
    username: string;
    email: string;
    password: string;
  }): Promise<any> {
    return Promise.resolve();
  }
}

export type State = {
  name: string;
  links: { [id: string]: { href: string; text: string } };
  data: { type: string; placeholder: string; value: string }[];
};
