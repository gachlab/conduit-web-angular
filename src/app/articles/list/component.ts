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
  onUpdatedArticle: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
