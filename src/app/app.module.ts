import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthModule } from '@auth0/auth0-angular';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';

import { SQDBoardsMain } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FofNotFoundComponent } from './fof-not-found/fof-not-found.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { OrdersComponent } from './user/orders/orders.component';
import { SettingsComponent } from './user/settings/settings.component';
import { UserGuard } from './user/user.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SQDBoardsMain,
    HomeComponent,
    AboutusComponent,
    UserComponent,
    ProfileComponent,
    OrdersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'user', component: UserComponent, canActivate: [UserGuard],
      children: [
        { path: '', redirectTo: 'profile', pathMatch: 'full' },
        { path: 'profile', component: ProfileComponent },
        { path: 'orders', component: OrdersComponent },
        { path: 'settings', component: SettingsComponent },
      ] },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: FofNotFoundComponent },
    ]),
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    AuthModule.forRoot({
      domain: 'sqdboards.eu.auth0.com',
      clientId: 'or172tB7I9o6fqmP4FyA7Ow1tvyGxrPs',
      // httpInterceptor: {
      //   allowedList: [
      //     {
      //       uri: 'https://sqdboards.eu.auth0.com/api/v2/users/*',
      //       tokenOptions: {
      //         scope: 'update:current_user_metadata'
      //       }
      //     }
      //   ]
      // }
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [SQDBoardsMain]
})
export class AppModule {}
