import { Injectable } from '@angular/core';
import { ConduitUserService } from './user.service';

@Injectable()
export class ConduitAppService {
  constructor(private userService: ConduitUserService) {}

  state = {
    header: {
      loggedIn: (user) => ({
        header: {
          home: {
            title: 'conduit',
            href: '#',
          },
          links: [
            {
              text: 'Home',
              href: '#',
              active: false,
              icon: undefined,
            },
            {
              text: 'New Post',
              href: '#/articles/create',
              active: false,
              icon: 'ion-compose',
            },
            {
              text: 'Settings',
              href: '#/settings',
              active: false,
              icon: 'ion-gear-a',
            },
            {
              text: `${user.username}`,
              href: `#/profile/${user.username}`,
              active: false,
              icon: undefined,
            },
          ],
        },
      }),
      unLogged: {
        header: {
          home: {
            title: 'conduit',
            href: '#',
          },
          links: [
            {
              text: 'Home',
              href: '#',
              active: false,
              icon: undefined,
            },
            {
              text: 'Sign in',
              href: '#/login',
              active: false,
              icon: undefined,
            },
            {
              text: 'Sign up',
              href: '#/register',
              active: false,
              icon: undefined,
            },
          ],
        },
      },
    },
  };

  init(): Promise<State> {
    return this.userService
      .get()
      .then((user) =>
        user ? this.state.header.loggedIn(user) : this.state.header.unLogged
      );
  }

  
}

export interface State {}
