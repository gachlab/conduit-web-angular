import { Injectable } from '@angular/core';

@Injectable()
export class ConduitPagesArticlesDetailsService {
  constructor() {}

  public init(articleId) {
    return Promise.all([
      this.fetchArticle(articleId),
      this.fetchComments(articleId),
    ]).then(([article, comments]) => ({
      article: article.article,
      comments: comments.comments,
    }));
  }

  private fetchArticle(articleId) {
    return fetch(
      `https://conduit.productionready.io/api/articles/${articleId}`
    ).then((response) => response.json());
  }

  private fetchComments(articleId) {
    return fetch(
      `https://conduit.productionready.io/api/articles/${articleId}/comments`
    ).then((response) => response.json());
  }
}
