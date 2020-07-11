import { Injectable } from '@angular/core';

@Injectable()
export class ConduitPagesHomeService {
  constructor() {}

  fetchArticles(
    filter = {
      limit: 10,
      offset: 0,
      feed: { id: 'all', name: '' },
    }
  ) {
    const url = `https://conduit.productionready.io/api/articles${
      filter ? '?' : ''
    }${filter.limit ? 'limit=' + filter.limit : ''}${
      '&offset=' + filter.offset || 0
    }${filter.feed.name.includes('#') ? '&tag=' + filter.feed.id : ''}`;

    return fetch(url)
      .then((response) => response.json())
      .then((articles) =>
        articles.articles.map((article) =>
          this.addArticleDetailLink(this.addProfilePageLink(article))
        )
      );
  }

  fetchTags() {
    return fetch(
      'https://conduit.productionready.io/api/tags'
    ).then((response) => response.json());
  }

  private addArticleDetailLink(article: any) {
    return Object.assign({}, article, {
      href: window.location.href + 'article/' + article.slug,
    });
  }

  private addProfilePageLink(article: any): any {
    return Object.assign({}, article, {
      authorHref: window.location.href + 'profile/' + article.author.username,
    });
  }
}
