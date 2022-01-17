import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomePageGuard implements CanActivate {

  constructor(private router: Router) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('skipConfiguratorWelcome')?.toString() === "true") {
      this.router.navigateByUrl('configurator/pcb-size');
      return true;
    }
    return true;
  }
  
}
