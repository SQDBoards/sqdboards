import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpCacheInterceptorModule } from "@ngneat/cashew";

import { SQDBoardsMain } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { UserComponent } from "./user/user.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { OrdersComponent } from "./user/orders/orders.component";
import { SettingsComponent } from "./user/settings/settings.component";
import { ConfiguratorComponent } from "./configurator/configurator.component";
import { FinalizeComponent } from "./configurator/finalize/finalize.component";
import { WelcomeComponent } from "./configurator/welcome/welcome.component";
import { BuilderComponent } from "./configurator/builder/builder.component";
import { HelpComponent } from "./help/help.component";
import { KeyboardSizeChartComponent } from "./help/keyboard-size-chart/keyboard-size-chart.component";
import { FaqsComponent } from "./help/faqs/faqs.component";

import { SquiModule } from "@scriptsqd/ngx-squi";
import { OrderPreviewComponent } from "./user/orders/order-preview/order-preview.component";
import { PcbComponent } from "./configurator/builder/steps/pcb/pcb.component";
import { AppRoutingModule } from "./app-routing.module";
import { RouteToCMSInterceptor } from "./misc/route-to-cms.interceptor";

import { LoadingDirective } from "./directives/loading.directive";
import { LoadingComponent } from "./directives/loading.component";
import { FetchFailedDirective } from "./directives/fetch-failed.directive";
import { FetchFailedComponent } from "./directives/fetch-failed.component";
import { LoginComponent } from "./userauth/login/login.component";
import { SignupComponent } from "./userauth/signup/signup.component";
import { ForgotPasswordComponent } from "./userauth/forgot-password/forgot-password.component";
import { InputComponent } from "./user/profile/input/input.component";

import { SwiperModule } from "swiper/angular";

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
    PcbComponent,
    FetchFailedDirective,
    FetchFailedComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    ReactiveFormsModule,
    SquiModule,
    SwiperModule
  ],
  entryComponents: [LoadingComponent, FetchFailedComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RouteToCMSInterceptor,
      multi: true
    }
  ],
  bootstrap: [SQDBoardsMain]
})
export class AppModule {}
