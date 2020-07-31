import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-buttons-favorite',
  templateUrl: './template.html',
})
export class ConduitButtonsFavoriteComponent {
  @Input()
  disabled: boolean = false;

  @Input()
  favorited: boolean = false;

  @Output()
  onFavorited: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  toggleFavorite() {
    this.onFavorited.emit(!this.favorited);
  }
}
