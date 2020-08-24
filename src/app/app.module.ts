import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConduitLayoutHeaderModule } from './components/conduit-layout-header/module';
import { ConduitLayoutFooterModule } from './components/conduit-layout-footer/module';
import { AppRoutingModule } from './app-routing.module';
import { ConduitAppComponent } from './app.component';
import { ConduitAppService } from './app.service';
import { ConduitUserService } from './user.service';
@NgModule({
  declarations: [ConduitAppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConduitLayoutHeaderModule,
    ConduitLayoutFooterModule,
  ],
  providers: [ConduitAppService, ConduitUserService],
  bootstrap: [ConduitAppComponent],
})
export class AppModule {}
