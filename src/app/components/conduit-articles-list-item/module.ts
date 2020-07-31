import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitArticlesListItemComponent } from './component';
import { ConduitArticlesPreviewModule } from '../conduit-articles-preview/module';
import { ConduitArticlesMetaModule } from '../conduit-articles-meta/module';
import { ConduitButtonsFavoriteModule } from '../conduit-buttons-favorite/module';

@NgModule({
  declarations: [ConduitArticlesListItemComponent],
  imports: [
    CommonModule,
    ConduitArticlesPreviewModule,
    ConduitArticlesMetaModule,
    ConduitButtonsFavoriteModule,
  ],
  exports: [ConduitArticlesListItemComponent],
  providers: [],
})
export class ConduitArticlesListItemModule {}
