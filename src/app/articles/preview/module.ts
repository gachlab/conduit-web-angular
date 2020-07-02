import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitArticlesPreviewComponent } from './component';
import { ConduitArticlesMetaModule } from '../meta/module';
import { ConduitButtonsFavoriteModule } from '../../favorite-button/module';
@NgModule({
  declarations: [ConduitArticlesPreviewComponent],
  imports: [
    CommonModule,
    ConduitArticlesMetaModule,
    ConduitButtonsFavoriteModule,
  ],
  exports: [ConduitArticlesPreviewComponent],
  providers: [],
})
export class ConduitArticlesPreviewModule {}
