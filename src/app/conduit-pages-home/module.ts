import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesHomeComponent } from './component';
import { ConduitPagesHomeService } from './service';
import { ConduitPagesHomeRoutingModule } from './routing.module';
import { ConduitArticlesFeedModule } from '../conduit-articles-feeds/module';
import { ConduitTagsPopularModule } from '../conduit-tags-popular/module';
import { ConduitArticlesPreviewModule } from '../conduit-articles-preview/module';
import { ConduitArticlesMetaModule } from '../conduit-articles-meta/module';
import { ConduitButtonsFavoriteModule } from '../conduit-buttons-favorite/module';
@NgModule({
  declarations: [ConduitPagesHomeComponent],
  imports: [
    CommonModule,
    ConduitPagesHomeRoutingModule,
    ConduitTagsPopularModule,
    ConduitArticlesFeedModule,
    ConduitArticlesPreviewModule,
    ConduitArticlesMetaModule,
    ConduitButtonsFavoriteModule,
  ],
  exports: [],
  providers: [ConduitPagesHomeService],
})
export class ConduitPagesHomeModule {}
