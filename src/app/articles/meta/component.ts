import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-meta',
  templateUrl: './template.html',
})
export class ConduitArticlesMetaComponent implements OnInit {
  @Input()
  article: any;

  @Output()
  onSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  select(author) {
    this.onSelected.emit(author);
  }
}
