import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conduit-layout-header',
  templateUrl: './template.html',
})
export class ConduitLayoutHeaderComponent {
  @Input()
  home: any;
  @Input()
  links: any[];
  constructor() {}
}
