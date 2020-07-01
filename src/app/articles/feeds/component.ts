import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-feeds',
  templateUrl: './template.html',
})
export class ConduitArticlesFeedComponent implements OnInit {
  @Input()
  feeds: Array<any> = [
    { id: 'personal', name: 'Your feed', selected: false },
    { id: 'all', name: 'Global Feed', selected: true },
  ];
  selected: string;
  @Output()
  onSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.selected = this.feeds[1].id;
  }

  select(id) {
    this.selected = id;
    this.onSelected.emit(id);
  }
}
