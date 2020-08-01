import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesArticlesDetailsComponent } from './component';
import { ConduitPagesArticlesDetailsService } from './service';
import { ConduitPagesArticlesDetailsRoutingModule } from './routing.module';
import { ConduitArticlesMetaModule } from '../components/conduit-articles-meta/module';
import { ConduitTagsListModule } from '../components/conduit-tags-list/module';
import { ConduitButtonsFavoriteModule } from '../components/conduit-buttons-favorite/module';
import { ConduitButtonsFollowModule } from '../components/conduit-buttons-follow/module';
import { ConduitArticlesCommentsListModule } from '../components/conduit-articles-comments-list/module';
import { ConduitArticlesCommentsCreateModule } from '../components/conduit-articles-comments-create/module';

@NgModule({
  declarations: [ConduitPagesArticlesDetailsComponent],
  imports: [
    CommonModule,
    ConduitPagesArticlesDetailsRoutingModule,
    ConduitArticlesMetaModule,
    ConduitTagsListModule,
    ConduitButtonsFollowModule,
    ConduitButtonsFavoriteModule,
    ConduitArticlesCommentsListModule,
    ConduitArticlesCommentsCreateModule,
  ],
  exports: [],
  providers: [ConduitPagesArticlesDetailsService],
})
export class ConduitPagesArticlesDetailsModule {}
