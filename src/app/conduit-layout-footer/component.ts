import { Component } from '@angular/core';

@Component({
  selector: 'app-conduit-layout-footer',
  templateUrl: './template.html',
})
export class ConduitLayoutFooterComponent {
  today: number = Date.now();
}
