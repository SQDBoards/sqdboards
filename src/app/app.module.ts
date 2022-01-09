import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SQDBoardsMain } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FofNotFoundComponent } from './fof-not-found/fof-not-found.component';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';

@NgModule({
  declarations: [
    SQDBoardsMain,
    HomeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: FofNotFoundComponent },
    ]),
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
  ],
  providers: [],
  bootstrap: [SQDBoardsMain]
})
export class AppModule {}
