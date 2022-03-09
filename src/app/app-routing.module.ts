import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutusComponent } from "./aboutus/aboutus.component";
import { BuilderComponent } from "./configurator/builder/builder.component";
import { ConfiguratorComponent } from "./configurator/configurator.component";
import { FinalizeComponent } from "./configurator/finalize/finalize.component";
import { WelcomePageGuard } from "./configurator/welcome-page.guard";
import { WelcomeComponent } from "./configurator/welcome/welcome.component";
import { FofNotFoundComponent } from "./fof-not-found/fof-not-found.component";
import { FaqsComponent } from "./help/faqs/faqs.component";
import { HelpComponent } from "./help/help.component";
import { KeyboardSizeChartComponent } from "./help/keyboard-size-chart/keyboard-size-chart.component";
import { HomeComponent } from "./home/home.component";
import { LeaveGuard } from "./leave-guard.guard";
import { OrdersComponent } from "./user/orders/orders.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { SettingsComponent } from "./user/settings/settings.component";
import { UserComponent } from "./user/user.component";
import { UserGuard } from "./user/user.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  {
    path: "user",
    component: UserComponent,
    canActivate: [UserGuard],
    children: [
      { path: "", redirectTo: "profile", pathMatch: "full" },
      { path: "profile", component: ProfileComponent },
      { path: "orders", component: OrdersComponent },
      { path: "settings", component: SettingsComponent }
    ]
  },
  {
    path: "configurator",
    component: ConfiguratorComponent,
    children: [
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      {
        path: "welcome",
        component: WelcomeComponent,
        canActivate: [WelcomePageGuard]
      },
      {
        path: "builder",
        component: BuilderComponent,
        canDeactivate: [LeaveGuard]
      },
      { path: "finalize", component: FinalizeComponent }
    ]
  },
  {
    path: "help",
    children: [
      { path: "", component: HelpComponent },
      {
        path: "keyboard-size-chart",
        component: KeyboardSizeChartComponent
      },
      { path: "faqs", component: FaqsComponent }
    ]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: FofNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
