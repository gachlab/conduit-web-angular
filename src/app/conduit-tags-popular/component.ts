import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-tags-popular',
  templateUrl: './template.html',
})
export class ConduitTagsPopularComponent implements OnInit {
  @Input()
  tags: Array<any> = [];

  @Output()
  onSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  select(tag) {
    this.onSelected.emit(tag);
  }

  tagTrackBy(index, item) {
    return item;
  }
}
