import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitArticlesListComponent } from './component';
import { ConduitArticlesPreviewModule } from '../preview/module';

@NgModule({
  declarations: [ConduitArticlesListComponent],
  imports: [CommonModule, ConduitArticlesPreviewModule],
  exports: [ConduitArticlesListComponent],
  providers: [],
})
export class ConduitArticlesListModule {}
