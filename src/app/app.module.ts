import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConduitLayoutHeaderModule } from './conduit-layout-header/module';
import { ConduitLayoutFooterModule } from './conduit-layout-footer/module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConduitLayoutHeaderModule,
    ConduitLayoutFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
