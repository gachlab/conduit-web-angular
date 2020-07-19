import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-tags-list',
  templateUrl: './template.html',
})
export class ConduitTagsListComponent implements OnInit {
  @Input()
  tags: Array<any> = [];

  @Output()
  onSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  tagTrackBy(index, item) {
    return item;
  }
}
