import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitLayoutHeaderComponent } from './header/component';
import { ConduitLayoutFooterComponent } from './footer/component';

@NgModule({
  declarations: [ConduitLayoutHeaderComponent, ConduitLayoutFooterComponent],
  imports: [CommonModule],
  exports: [ConduitLayoutHeaderComponent, ConduitLayoutFooterComponent],
  providers: [],
})
export class ConduitLayoutModule {}
