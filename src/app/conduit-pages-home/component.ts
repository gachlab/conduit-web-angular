import { Component, OnInit } from '@angular/core';
import { ConduitPagesHomeService } from './service';
import { State } from './service';

@Component({
  selector: 'app-conduit-pages-home',
  templateUrl: './template.html',
})
export class ConduitPagesHomeComponent implements OnInit {
  state: State = {
    articles: undefined,
    pages: undefined,
    tags: undefined,
    feeds: undefined,
    selectedFeed: undefined,
    selectedPage: undefined,
  };

  constructor(private service: ConduitPagesHomeService) {}

  ngOnInit() {
    this.init();
  }

  onTagSelected(tag) {
    this.service
      .onTagSelected({
        tag,
        state: Object.assign({}, this.state),
      })
      .then((state) => this.setState(state));
  }

  onFeedSelected(feed) {
    this.service
      .onFeedSelected({
        feed: feed,
        state: Object.assign({}, this.state),
      })
      .then((state) => this.setState(state));
  }

  onPageSelected(page) {
    this.service
      .onPageSelected({ page, state: Object.assign({}, this.state) })
      .then((state) => this.setState(state));
  }

  private init() {
    this.service
      .init()
      .then((state) => (this.state = Object.assign({}, state)));
  }

  private setState(state: State): State {
    return (this.state = Object.assign({}, state));
  }
}
