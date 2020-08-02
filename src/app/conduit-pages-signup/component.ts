import { Component, OnInit } from '@angular/core';
import { ConduitPagesSignupService } from './service';
import { State } from './service';

@Component({
  selector: 'app-conduit-pages-signup',
  templateUrl: './template.html',
})
export class ConduitPagesSignupComponent implements OnInit {
  state: State;
  constructor(private service: ConduitPagesSignupService) {}

  ngOnInit() {
    this.service.init().then((state) => this.setState(state));
  }

  private setState(state: State): State {
    return (this.state = Object.assign({}, state));
  }
}
