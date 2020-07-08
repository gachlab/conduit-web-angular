import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesHomeComponent } from './component';
import { ConduitPagesHomeRoutingModule } from './routing.module';
import { ConduitArticlesFeedModule } from '../articles/feeds/module';
import { ConduitTagsPopularModule } from '../tags/popular/module';
import { ConduitArticlesListModule } from '../articles/list/module';
import { ConduitPagesHomeService } from './service';
import { ConduitArticlesPreviewModule } from '../articles/preview/module';
import { ConduitArticlesMetaModule } from '../articles/meta/module';
import { ConduitButtonsFavoriteModule } from '../favorite-button/module';
@NgModule({
  declarations: [ConduitPagesHomeComponent],
  imports: [
    CommonModule,
    ConduitPagesHomeRoutingModule,
    ConduitTagsPopularModule,
    ConduitArticlesFeedModule,
    ConduitArticlesListModule,
    ConduitArticlesPreviewModule,
    ConduitArticlesMetaModule,
    ConduitButtonsFavoriteModule,
  ],
  exports: [],
  providers: [ConduitPagesHomeService],
})
export class ConduitPagesHomeModule {}
