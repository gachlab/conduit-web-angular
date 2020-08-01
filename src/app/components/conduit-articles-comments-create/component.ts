import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-comments-create',
  templateUrl: './template.html',
})
export class ConduitArticlesCommentsCreateComponent {
  @Input()
  author: any;

  @Output()
  onPostedComment: EventEmitter<any> = new EventEmitter();
  comment: any;

  constructor() {}

  postComment(event, comment) {
    event.preventDefault();
    this.onPostedComment.emit(comment);
  }

  updateComment(comment) {
    this.comment = comment;
  }
}
