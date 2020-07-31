import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-meta',
  templateUrl: './template.html',
})
export class ConduitArticlesMetaComponent implements OnInit {
  @Input()
  article: any;

  constructor() {}

  ngOnInit() {}
}
