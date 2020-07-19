import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-list',
  templateUrl: './template.html',
})
export class ConduitArticlesListComponent implements OnInit {
  @Input()
  articles: any;

  constructor() {}

  ngOnInit() {}

  articleTrackBy(index, article) {
    return article.slug;
  }
}
