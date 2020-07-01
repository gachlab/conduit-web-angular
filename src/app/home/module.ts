import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesHomeComponent } from './component';
import { ConduitPagesHomeRoutingModule } from './routing.module';

@NgModule({
  declarations: [ConduitPagesHomeComponent],
  imports: [CommonModule, ConduitPagesHomeRoutingModule],
  exports: [],
  providers: [],
})
export class ConduitPagesHomeModule {}
