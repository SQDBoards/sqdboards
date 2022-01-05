import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SQDBoardsMain } from './app.component';

@NgModule({
  declarations: [
    SQDBoardsMain
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SQDBoardsMain]
})
export class AppModule {}
