import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-preview',
  templateUrl: './template.html',
})
export class ConduitArticlesPreviewComponent implements OnInit {
  @Input()
  article: any = undefined;

  @Output()
  onArticleSelected: EventEmitter<string> = new EventEmitter();
  @Output()
  onAuthorSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectArticle(article) {
    this.onArticleSelected.emit(article);
  }

  selectAuthor(author) {
    this.onAuthorSelected.emit(author);
  }
}
