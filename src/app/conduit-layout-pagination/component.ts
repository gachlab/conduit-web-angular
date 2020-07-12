import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-layout-pagination',
  templateUrl: './template.html',
})
export class ConduitLayoutPaginationComponent {
  @Input()
  pages: [];
  @Input()
  selected: number;
  @Output()
  onSelect: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}
}
