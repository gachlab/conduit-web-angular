import { Component, OnInit } from '@angular/core';
import { ConduitPagesSigninService, State } from './service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conduit-pages-signin',
  templateUrl: './template.html',
})
export class ConduitPagesSigninComponent implements OnInit {
  state: State;

  constructor(
    private service: ConduitPagesSigninService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.init().then((state) => this.setState(state));
  }

  onSubmitted(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.login({
      username: data.get('username'),
      password: data.get('password'),
    });
  }

  private login(input: { username: any; password: any }) {
    this.service
      .login(this.state)(input)
      .then((state) => this.setState(state));
  }

  private setState(state: any) {
    this.state = Object.assign({}, state);
  }
}
