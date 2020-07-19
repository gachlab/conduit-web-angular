import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesHomeComponent } from './component';
import { ConduitPagesHomeService } from './service';
import { ConduitPagesHomeRoutingModule } from './routing.module';
import { ConduitArticlesFeedModule } from '../conduit-articles-feeds/module';
import { ConduitTagsListModule } from '../conduit-tags-list/module';
import { ConduitArticlesListModule } from '../conduit-articles-list/module';
import { ConduitLayoutPaginationModule } from '../conduit-layout-pagination/module';

@NgModule({
  declarations: [ConduitPagesHomeComponent],
  imports: [
    CommonModule,
    ConduitPagesHomeRoutingModule,
    ConduitTagsListModule,
    ConduitArticlesFeedModule,

    ConduitLayoutPaginationModule,
    ConduitArticlesListModule,
  ],
  exports: [],
  providers: [ConduitPagesHomeService],
})
export class ConduitPagesHomeModule {}
