import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesHomeComponent } from './component';
import { ConduitPagesHomeRoutingModule } from './routing.module';
import { ConduitArticlesFeedModule } from '../articles/feeds/module';
import { ConduitTagsPopularModule } from '../tags/popular/module';
import { ConduitArticlesListModule } from '../articles/list/module';
import { ConduitPagesHomeService } from './service';
@NgModule({
  declarations: [ConduitPagesHomeComponent],
  imports: [
    CommonModule,
    ConduitPagesHomeRoutingModule,
    ConduitTagsPopularModule,
    ConduitArticlesFeedModule,
    ConduitArticlesListModule,
  ],
  exports: [],
  providers: [ConduitPagesHomeService],
})
export class ConduitPagesHomeModule {}
