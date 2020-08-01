import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-comments-list',
  templateUrl: './template.html',
})
export class ConduitArticlesCommentsListComponent {
  @Input()
  comments: any;

  constructor() {}
}
