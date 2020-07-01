import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConduitPagesHomeComponent } from './component';

const routes: Routes = [{ path: '', component: ConduitPagesHomeComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConduitPagesHomeRoutingModule {}
