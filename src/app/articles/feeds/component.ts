import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-feed',
  templateUrl: './template.html',
})
export class ConduitArticlesFeedComponent implements OnInit {
  @Input()
  tags: Array<any> = [];

  @Output()
  onSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
