import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitArticlesListComponent } from './component';
import { ConduitArticlesPreviewModule } from '../conduit-articles-preview/module';
import { ConduitArticlesMetaModule } from '../conduit-articles-meta/module';
import { ConduitButtonsFavoriteModule } from '../conduit-buttons-favorite/module';

@NgModule({
  declarations: [ConduitArticlesListComponent],
  imports: [
    CommonModule,
    ConduitArticlesPreviewModule,
    ConduitArticlesMetaModule,
    ConduitButtonsFavoriteModule,
  ],
  exports: [ConduitArticlesListComponent],
  providers: [],
})
export class ConduitArticlesListModule {}
