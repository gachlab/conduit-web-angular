import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-preview',
  templateUrl: './template.html',
})
export class ConduitArticlesPreviewComponent implements OnInit {
  @Input()
  article: any;

  constructor() {}

  ngOnInit() {}
}
