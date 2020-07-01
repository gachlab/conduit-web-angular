import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class ConduitArticlesListComponent implements OnInit {
  @Input()
  articles: Array<any> = [];
  loading: boolean = true;
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
