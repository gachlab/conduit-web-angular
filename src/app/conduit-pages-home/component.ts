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
        state: this.getState(),
      })
      .then((state) => this.setState(state));
  }

  onFeedSelected(feed) {
    this.service
      .onFeedSelected({
        feed: feed,
        state: this.getState(),
      })
      .then((state) => this.setState(state));
  }

  onFavoritedArticle(article) {
    console.log(article);
  }

  onPageSelected(page) {
    this.service
      .onPageSelected({ page, state: this.getState() })
      .then((state) => this.setState(state));
  }

  articleTrackBy(index, article) {
    return article.slug;
  }

  private init() {
    this.service.init().then((state) => this.setState(state));
  }

  private getState(): State {
    return JSON.parse(JSON.stringify(this.state));
  }

  private setState(input: State) {
    Object.keys(input).forEach(
      (property) => (this.state[property] = input[property])
    );
  }
}
