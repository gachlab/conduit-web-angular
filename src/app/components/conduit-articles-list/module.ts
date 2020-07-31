import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitArticlesListComponent } from './component';
import { ConduitArticlesListItemModule } from '../conduit-articles-list-item/module';

@NgModule({
  declarations: [ConduitArticlesListComponent],
  imports: [CommonModule, ConduitArticlesListItemModule],
  exports: [ConduitArticlesListComponent],
  providers: [],
})
export class ConduitArticlesListModule {}
