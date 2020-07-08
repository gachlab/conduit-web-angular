import { Component, OnInit } from '@angular/core';
import { ConduitPagesHomeService } from './service';

@Component({
  selector: 'app-conduit-pages-home',
  templateUrl: './template.html',
})
export class ConduitPagesHomeComponent implements OnInit {
  filters = {};
  articles: Array<any> = undefined;
  tags: Array<string> = undefined;
  feeds: Array<{
    id: string;
    name: string;
    selected: boolean;
    isTag: boolean;
  }> = [];

  constructor(private service: ConduitPagesHomeService) {}

  ngOnInit() {
    this.service.init().then(this.setInitialState.bind(this));
  }

  onTagSelected(tag) {
    this.addTagToFeed(tag);
  }

  onFeedSelected(selectedFeed) {
    this.selectFeed(selectedFeed);
    this.listArticlesByFeed(selectedFeed);
  }

  onFavoritedArticle(article) {
    console.log(article);
  }

  articleTrackBy(index, article) {
    return article.slug;
  }

  private setInitialState(state: {
    articles: Array<any>;
    tags: Array<any>;
  }): void {
    this.filters = {};
    this.articles = state.articles;
    this.tags = state.tags;
    this.feeds = [
      { id: 'personal', name: 'Your feed', selected: false, isTag: false },
      { id: 'all', name: 'Global Feed', selected: true, isTag: false },
    ];
  }

  private listArticlesByFeed(selectedFeed: any) {
    this.service.listArticlesByFeed(selectedFeed).then((articles) => {
      this.articles = articles;
    });
  }

  private selectFeed(selectedFeed: any) {
    this.feeds = this.feeds.map((feed) =>
      Object.assign(feed, { selected: feed.id === selectedFeed.id })
    );
  }

  private addTagToFeed(tag: string) {
    const tagFeed = {
      id: tag.toLowerCase(),
      name: '#' + tag,
      selected: true,
      isTag: true,
    };

    this.feeds = this.feeds
      .map((feed) => Object.assign(feed, { selected: false }))
      .concat([tagFeed]);

    this.listArticlesByFeed(tagFeed);
  }
}
