import { Component, OnInit } from '@angular/core';
import { ConduitPagesHomeService } from './service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-conduit-pages-home',
  templateUrl: './template.html',
})
export class ConduitPagesHomeComponent implements OnInit {
  filters = {};
  articles: Array<any> = undefined;
  tags: Array<string> = undefined;
  feeds: Array<{ id: string; name: string; selected: boolean }> = [];

  constructor(private service: ConduitPagesHomeService) {}

  ngOnInit() {
    this.service.init().then(this.setInitialState.bind(this));
  }

  onTagSelected(tag) {
    this.addTagToFeed(tag);
    this.listArticlesByTag(tag);
  }

  onFeedSelected(selectedFeed) {
    this.selectFeed(selectedFeed);
    this.listArticlesByFeed(selectedFeed);
  }

  onUpdatedArticle(article) {
    console.log(article);
  }

  private listArticlesByTag(tag: any) {
    this.service
      .listArticlesByTag(tag)
      .then((articles) => (this.articles = articles));
  }

  private listArticlesByFeed(selectedFeed: any) {
    this.service
      .listArticlesByFeed(selectedFeed)
      .then((articles) => (this.articles = articles));
  }

  private setInitialState(state: {
    articles: Array<any>;
    tags: Array<any>;
  }): void {
    this.filters = {};
    this.articles = state.articles;
    this.tags = state.tags;
    this.feeds = [
      { id: 'personal', name: 'Your feed', selected: false },
      { id: 'all', name: 'Global Feed', selected: true },
    ];
  }

  private selectFeed(selectedFeedId: string) {
    this.feeds = this.feeds.map((feed) =>
      Object.assign(feed, { selected: feed.id === selectedFeedId })
    );
  }

  private addTagToFeed(tag: string) {
    this.feeds = this.feeds
      .map((feed) => Object.assign(feed, { selected: false }))
      .concat([
        {
          id: tag.toLowerCase(),
          name: '#' + tag,
          selected: true,
        },
      ]);
  }
}
