import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConduitPagesArticlesDetailsComponent } from './component';

const routes: Routes = [{ path: '', component: ConduitPagesArticlesDetailsComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConduitPagesArticlesDetailsRoutingModule {}
