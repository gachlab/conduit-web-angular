import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-buttons-favorite',
  templateUrl: './template.html',
})
export class ConduitButtonsFavoriteComponent {
  @Input()
  article: any;

  @Output()
  onFavorited: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  favorite(article) {
    this.onFavorited.emit(article);
  }
}
