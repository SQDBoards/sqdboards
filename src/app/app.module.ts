import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { ConfiguratorComponent } from './configurator/configurator.component';
import { PcbSizeComponent } from './configurator/pcb-size/pcb-size.component';
import { CasePlateComponent } from './configurator/case-plate/case-plate.component';
import { SwitchesStabsComponent } from './configurator/switches-stabs/switches-stabs.component';
import { KcapsComponent } from './configurator/kcaps/kcaps.component';
import { FinalizeComponent } from './configurator/finalize/finalize.component';
import { WelcomeComponent } from './configurator/welcome/welcome.component';
import { WelcomePageGuard } from './configurator/welcome-page.guard';

@NgModule({
  declarations: [
    SQDBoardsMain,
    HomeComponent,
    AboutusComponent,
    UserComponent,
    ProfileComponent,
    OrdersComponent,
    SettingsComponent,
    ConfiguratorComponent,
    PcbSizeComponent,
    CasePlateComponent,
    SwitchesStabsComponent,
    KcapsComponent,
    FinalizeComponent,
    WelcomeComponent
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
      ]},
      { path: 'configurator', component: ConfiguratorComponent,
        children: [
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: 'welcome', component: WelcomeComponent, canActivate: [WelcomePageGuard] },
          { path: 'pcb-size', component: PcbSizeComponent },
          { path: 'case-plate', component: CasePlateComponent },
          { path: 'switches-stabs', component: SwitchesStabsComponent },
          { path: 'kcaps', component: KcapsComponent },
          { path: 'finalize', component: FinalizeComponent },
        ]},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: FofNotFoundComponent },
    ]),
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    AuthModule.forRoot({
      domain: 'sqdboards.eu.auth0.com',
      clientId: 'or172tB7I9o6fqmP4FyA7Ow1tvyGxrPs'
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [SQDBoardsMain]
})
export class AppModule {}
