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

  constructor(private service: ConduitPagesHomeService) {}

  ngOnInit() {
    this.init();
  }

  onTagSelected(tag) {
    const tagFeed = {
      id: tag.toLowerCase(),
      name: '#' + tag,
    };
    this.feeds[2] = tagFeed;
    this.selectedFeed = tagFeed.id;
    this.service
      .fetchArticles({
        limit: 10,
        offset: 0,
        feed: tagFeed,
      })
      .then((articles) => (this.articles = articles));
  }

  onFeedSelected(selectedFeed) {
    this.selectedFeed = selectedFeed.id;
    this.service
      .fetchArticles({
        limit: 10,
        offset: 0,
        feed: selectedFeed,
      })
      .then((articles) => (this.articles = articles));
  }

  onFavoritedArticle(article) {
    console.log(article);
  }

  articleTrackBy(index, article) {
    return article.slug;
  }

  private init() {
    Promise.all([this.service.fetchArticles(), this.service.fetchTags()])
      .then(([articles, tags]) => ({
        articles: articles,
        tags: tags.tags,
      }))
      .then((state) => {
        this.articles = state.articles;
        this.tags = state.tags;
        this.feeds = [
          { id: 'personal', name: 'Your feed' },
          { id: 'all', name: 'Global Feed' },
        ];
        this.selectedFeed = 'all';
      });
  }
}
