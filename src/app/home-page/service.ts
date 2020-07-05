import { Injectable } from '@angular/core';

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

  listArticlesByFeed(selectedFeed: string): Promise<Array<any>> {
    throw selectedFeed === 'all'
      ? this.fetchArticles()
      : selectedFeed === 'personal'
      ? this.fetchUserFeed()
      : this.fetchArticles();
  }

  listArticlesByTag(tag: any) {
    return this.fetchArticles({ limit: 10, offset: 0, tag });
  }

  private fetchTags() {
    return fetch(
      'https://conduit.productionready.io/api/tags'
    ).then((response) => response.json());
  }

  private fetchArticles(
    filter = {
      limit: 10,
      offset: 0,
      tag: undefined,
    }
  ) {
    return fetch(
      `https://conduit.productionready.io/api/articles${filter ? '?' : ''}${
        filter.limit ? 'limit=' + filter.limit : ''
      }${'&offset=' + filter.offset || 0}${
        filter.tag ? 'tag=' + filter.tag : ''
      }`
    )
      .then((response) => response.json())
      .then((articles) =>
        articles.articles.map((article) =>
          this.addArticleDetailLink(this.addProfilePageLink(article))
        )
      );
  }
  private fetchUserFeed(
    filter = {
      limit: 10,
      offset: 0,
    }
  ) {
    return this.fetchArticles();
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
