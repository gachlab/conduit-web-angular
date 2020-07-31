import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitArticlesPreviewComponent } from './component';
import { ConduitTagsListModule } from '../conduit-tags-list/module';
@NgModule({
  declarations: [ConduitArticlesPreviewComponent],
  imports: [CommonModule, ConduitTagsListModule],
  exports: [ConduitArticlesPreviewComponent],
  providers: [],
})
export class ConduitArticlesPreviewModule {}
