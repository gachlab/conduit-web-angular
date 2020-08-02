import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesSigninRoutingModule } from './routing.module';
import { ConduitPagesSigninComponent } from './component';
import { ConduitPagesSigninService } from './service';

@NgModule({
  declarations: [ConduitPagesSigninComponent],
  imports: [CommonModule, ConduitPagesSigninRoutingModule],
  exports: [ConduitPagesSigninComponent],
  providers: [ConduitPagesSigninService],
})
export class ConduitPagesSigninModule {}
