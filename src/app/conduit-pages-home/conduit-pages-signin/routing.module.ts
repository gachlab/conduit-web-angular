import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConduitPagesSigninComponent } from './component';

const routes: Routes = [
    { path: '', component: ConduitPagesSigninComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConduitPagesSigninRoutingModule {}
    