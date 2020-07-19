import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesHomeComponent } from './component';
import { ConduitPagesHomeService } from './service';
import { ConduitPagesHomeRoutingModule } from './routing.module';
import { ConduitArticlesFeedModule } from '../conduit-articles-feeds/module';
import { ConduitTagsListModule } from '../conduit-tags-list/module';
import { ConduitArticlesPreviewModule } from '../conduit-articles-preview/module';
import { ConduitArticlesMetaModule } from '../conduit-articles-meta/module';
import { ConduitButtonsFavoriteModule } from '../conduit-buttons-favorite/module';
import { ConduitLayoutPaginationModule } from '../conduit-layout-pagination/module';
@NgModule({
  declarations: [ConduitPagesHomeComponent],
  imports: [
    CommonModule,
    ConduitPagesHomeRoutingModule,
    ConduitTagsListModule,
    ConduitArticlesFeedModule,
    ConduitArticlesPreviewModule,
    ConduitArticlesMetaModule,
    ConduitButtonsFavoriteModule,
    ConduitLayoutPaginationModule,
  ],
  exports: [],
  providers: [ConduitPagesHomeService],
})
export class ConduitPagesHomeModule {}
