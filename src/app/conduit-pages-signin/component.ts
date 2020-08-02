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

  login() {
    this.service.login(this.state).then(() => this.router.navigate(['/']));
  }

  onSubmitted(event, state) {
    event.preventDefault();
    console.log(state);
  }

  private setState(state: any) {
    this.state = Object.assign({}, state);
  }
}
