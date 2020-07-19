import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-list-item',
  templateUrl: './template.html',
})
export class ConduitArticlesListItemComponent implements OnInit {
  @Input()
  article: any;

  constructor() {}

  ngOnInit() {}

  onFavoritedArticle(article) {
    console.log(article);
  }
}
