import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ConduitPagesHomeService {
  constructor() {}

  init() {
    return Promise.all([this.fetchArticles(), this.fetchTags()]).then(
      ([articles, tags]) => ({
        articles: articles,
        tags: tags.tags,
      })
    );
  }

  private fetchArticles(
    filter = {
      limit: 10,
      offset: 0,
    }
  ) {
    return fetch(
      `https://conduit.productionready.io/api/articles${filter ? '?' : ''}${
        filter.limit ? 'limit=' + filter.limit : ''
      }${'&offset=' + filter.offset || 0}`
    )
      .then((response) => response.json())
      .then((articles) =>
        articles.articles.map((article) =>
          this.addArticleDetailLink(this.addProfilePageLink(article))
        )
      );
  }

  addArticleDetailLink(article: any) {
    return Object.assign({}, article, {
      href: window.location.href + 'article/' + article.slug,
    });
  }

  addProfilePageLink(article: any): any {
    return Object.assign({}, article, {
      authorHref: window.location.href + 'profile/' + article.author.username,
    });
  }

  private fetchTags() {
    return fetch(
      'https://conduit.productionready.io/api/tags'
    ).then((response) => response.json());
  }
}
