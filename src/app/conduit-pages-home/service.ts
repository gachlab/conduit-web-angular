import { Injectable } from '@angular/core';

@Injectable()
export class ConduitPagesHomeService {
  constructor() {}

  init() {
    const selectedPage = 1;
    const feeds = [
      { id: 'personal', name: 'Your feed' },
      { id: 'all', name: 'Global Feed' },
    ];
    const selectedFeed = feeds[1].id;

    return Promise.all([
      this.fetchArticles({
        limit: 10,
        page: selectedPage,
        feed: feeds[1],
      }),
      this.fetchTags(),
    ])
      .then(([articles, tags]) => ({
        articles: articles,
        tags: tags.tags,
      }))
      .then((state) =>
        this.createState({
          articles: state.articles.data,
          pages: state.articles.meta.pages,
          tags: state.tags,
          selectedFeed,
          feeds,
          selectedPage,
        })
      );
  }

  onTagSelected(input: { tag; state }) {
    return this.selectFeed({
      feed: {
        id: input.tag.toLowerCase(),
        name: '#' + input.tag,
      },
      state: input.state,
    });
  }

  onFeedSelected(input: { feed; state }) {
    return this.selectFeed({
      feed: input.feed,
      state: input.state,
    });
  }

  onPageSelected(input: { page; state }) {
    return this.changePage({ page: input.page, state: input.state });
  }

  private selectFeed(input: { feed: { id: any; name: string }; state }) {
    !input.state.feeds.find((f) => f.id === input.feed.id)
      ? (input.state.feeds[2] = input.feed)
      : undefined;

    return this.fetchArticles({
      limit: 10,
      page: 1,
      feed: input.feed,
    }).then((articles) =>
      this.createState({
        articles: articles.data,
        pages: articles.meta.pages,
        tags: input.state.tags,
        feeds: input.state.feeds,
        selectedFeed: input.feed.id,
        selectedPage: 1,
      })
    );
  }

  private changePage(input: { page: any; state: any }) {
    return this.fetchArticles({
      limit: 10,
      page: input.page,
      feed: input.state.feeds.find(
        (feed) => feed.id === input.state.selectedFeed
      ),
    }).then((response) =>
      this.createState({
        articles: response.data,
        pages: response.meta.pages,
        selectedPage: input.page,
        tags: input.state.tags,
        feeds: input.state.feeds,
        selectedFeed: input.state.selectedFeed,
      })
    );
  }

  private fetchArticles(filter) {
    filter = Object.assign(filter, {
      offset: filter.limit * (filter.page - 1),
    });
    const url = `https://conduit.productionready.io/api/articles${
      filter ? '?' : ''
    }${filter.limit ? 'limit=' + filter.limit : ''}${
      '&offset=' + filter.offset || 0
    }${filter.feed.name.includes('#') ? '&tag=' + filter.feed.id : ''}`;

    return fetch(url)
      .then((response) => response.json())
      .then((response) => ({
        data: response.articles.map((article) =>
          this.addArticleDetailLink(this.addProfilePageLink(article))
        ),
        meta: {
          pages: Array.from(
            new Array(Math.ceil(response.articlesCount / filter.limit)),
            (val, index) => index + 1
          ),
        },
      }));
  }

  private fetchTags() {
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

  private createState(input: {
    articles: any;
    pages: any;
    tags: any;
    feeds: any;
    selectedFeed: any;
    selectedPage: any;
  }) {
    return {
      articles: input.articles,
      pages: input.pages,
      tags: input.tags,
      feeds: input.feeds,
      selectedFeed: input.selectedFeed,
      selectedPage: input.selectedPage,
    };
  }
}
