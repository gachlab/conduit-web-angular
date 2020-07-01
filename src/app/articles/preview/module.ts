import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitArticlesPreviewComponent } from './component';
import { ConduitArticlesMetaModule } from '../meta/module';

@NgModule({
  declarations: [ConduitArticlesPreviewComponent],
  imports: [CommonModule, ConduitArticlesMetaModule],
  exports: [ConduitArticlesPreviewComponent],
  providers: [],
})
export class ConduitArticlesPreviewModule {}
