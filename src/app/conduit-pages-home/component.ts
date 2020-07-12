import { Component, OnInit } from '@angular/core';
import { ConduitPagesHomeService } from './service';

@Component({
  selector: 'app-conduit-pages-home',
  templateUrl: './template.html',
})
export class ConduitPagesHomeComponent implements OnInit {
  articles: Array<any> = undefined;
  tags: Array<string> = undefined;
  feeds: Array<{
    id: string;
    name: string;
  }> = [];
  selectedFeed: any;
  pages: any;
  selectedPage: any;

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

  private getState() {
    return JSON.parse(
      JSON.stringify({
        articles: this.articles,
        pages: this.pages,
        tags: this.tags,
        feeds: this.feeds,
        selectedFeed: this.selectedFeed,
        selectedPage: this.selectedPage,
      })
    );
  }

  private setState(input: {
    articles: any[];
    pages: any;
    tags: string[];
    feeds: { id: string; name: string }[];
    selectedFeed: any;
    selectedPage: any;
  }) {
    this.articles = input.articles;
    this.pages = input.pages;
    this.tags = input.tags;
    this.feeds = input.feeds;
    this.selectedFeed = input.selectedFeed;
    this.selectedPage = input.selectedPage;
  }
}
