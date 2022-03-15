import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";

import { PcbComponent } from "./configurator/builder/steps/pcb/pcb.component";

@Injectable({
  providedIn: "root"
})
export class LeaveGuard implements CanDeactivate<PcbComponent> {
  canDeactivate(
    component: PcbComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // If user is navigating to Configurator - he's being redirected to builder and nothing changes
    // So no need to display a confirm
    if (!component.pcbChoice?.dirty) return true;
    if (
      nextState?.url.toString() == "/configurator/welcome" ||
      nextState?.url.toString() == "/configurator/builder"
    )
      return true;

    if (
      confirm(
        "Are you sure? You have unsaved changes. If you leave, they will be lost."
      )
    )
      return true;
    else return false;
  }
}
