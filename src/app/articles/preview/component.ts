import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-preview',
  templateUrl: './template.html',
})
export class ConduitArticlesPreviewComponent implements OnInit {
  @Input()
  article: any = undefined;

  @Output()
  onUpdatedArticle: EventEmitter<true> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  favoriteArticle(event) {
    this.onUpdatedArticle.emit(
      Object.assign(event.article, { favorited: event.favorite })
    );
  }
}
