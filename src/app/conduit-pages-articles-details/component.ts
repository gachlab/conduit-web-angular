import { Component, OnInit } from '@angular/core';
import { ConduitPagesArticlesDetailsService } from './service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conduit-pages-articles-details',
  templateUrl: './template.html',
})
export class ConduitPagesArticlesDetailsComponent implements OnInit {
  state = {
    article: undefined,
    comments: undefined,
  };

  constructor(
    private service: ConduitPagesArticlesDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => this.init(params['id']));
  }

  private init(id) {
    this.service.init(id).then((state) => this.setState(state));
  }

  private setState(state): void {
    this.state = Object.assign({}, state);
  }
}
