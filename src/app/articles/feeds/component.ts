import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-feeds',
  templateUrl: './template.html',
})
export class ConduitArticlesFeedComponent implements OnInit {
  @Input()
  feeds: Array<any> = [];
  @Output()
  onSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  select(id) {
    this.onSelected.emit(id);
  }
}
