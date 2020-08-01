import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-buttons-follow',
  templateUrl: './template.html',
})
export class ConduitButtonsFollowComponent {
  @Input()
  profile: any;

  @Output()
  onFollowed: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  follow(profile) {
    this.onFollowed.emit(profile);
  }
}
