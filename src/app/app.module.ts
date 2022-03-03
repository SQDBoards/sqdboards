import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
import { FinalizeComponent } from './configurator/finalize/finalize.component';
import { WelcomeComponent } from './configurator/welcome/welcome.component';
import { WelcomePageGuard } from './configurator/welcome-page.guard';
import { BuilderComponent } from './configurator/builder/builder.component';
import { HelpComponent } from './help/help.component';
import { KeyboardSizeChartComponent } from './help/keyboard-size-chart/keyboard-size-chart.component';
import { FaqsComponent } from './help/faqs/faqs.component';

import { SquiModule } from '@scriptsqd/ngx-squi';
import { LoadingDirective } from './loading.directive';
import { LoadingComponent } from './loading/loading.component';
import { OrderPreviewComponent } from './user/orders/order-preview/order-preview.component';

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
    FinalizeComponent,
    WelcomeComponent,
    BuilderComponent,
    HelpComponent,
    KeyboardSizeChartComponent,
    FaqsComponent,
    LoadingDirective,
    LoadingComponent,
    LoadingDirective,
    LoadingComponent,
    OrderPreviewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'aboutus', component: AboutusComponent },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [UserGuard],
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: ProfileComponent },
          { path: 'orders', component: OrdersComponent },
          { path: 'settings', component: SettingsComponent },
        ],
      },
      {
        path: 'configurator',
        component: ConfiguratorComponent,
        children: [
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          {
            path: 'welcome',
            component: WelcomeComponent,
            canActivate: [WelcomePageGuard],
          },
          {
            path: 'builder',
            component: BuilderComponent,
          },
          { path: 'finalize', component: FinalizeComponent },
        ],
      },
      {
        path: 'help',
        children: [
          { path: '', component: HelpComponent },
          {
            path: 'keyboard-size-chart',
            component: KeyboardSizeChartComponent,
          },
          { path: 'faqs', component: FaqsComponent },
        ],
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: FofNotFoundComponent },
    ]),
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    AuthModule.forRoot({
      domain: 'sqdboards.eu.auth0.com',
      clientId: 'or172tB7I9o6fqmP4FyA7Ow1tvyGxrPs',
    }),
    ReactiveFormsModule,
    SquiModule
  ],
  providers: [],
  entryComponents: [LoadingComponent],
  bootstrap: [SQDBoardsMain],
})
export class AppModule {}
