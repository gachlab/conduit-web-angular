import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConduitPagesSignupComponent } from './component';
import { ConduitPagesSignupService } from './service';
import { ConduitPagesSignupRoutingModule } from './routing.module';

@NgModule({
  declarations: [ConduitPagesSignupComponent],
  imports: [CommonModule, ConduitPagesSignupRoutingModule],
  exports: [],
  providers: [ConduitPagesSignupService],
})
export class ConduitPagesSignupModule {}
