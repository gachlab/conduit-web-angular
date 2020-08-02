import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conduit-layout-header',
  templateUrl: './template.html',
})
export class ConduitLayoutHeaderComponent {
  @Input()
  links: any[];
  constructor() {}
}
