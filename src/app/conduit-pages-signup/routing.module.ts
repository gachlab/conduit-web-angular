import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConduitPagesSignupComponent } from './component';

const routes: Routes = [{ path: '', component: ConduitPagesSignupComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConduitPagesSignupRoutingModule {}
