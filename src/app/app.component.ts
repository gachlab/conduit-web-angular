import { Component } from '@angular/core';
import { ConduitAppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class ConduitAppComponent {
  state;

  constructor(private service: ConduitAppService) {}

  ngOnInit() {
    this.service
      .init()
      .then((state) => (this.state = Object.assign({}, this.state, state)))
      .then(() => console.log(this.state));
  }
}
