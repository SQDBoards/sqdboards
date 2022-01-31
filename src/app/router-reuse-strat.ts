import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class RouterReuseStrat implements RouteReuseStrategy {
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log(route.routeConfig?.path, "shouldDetach is", !!route.routeConfig?.data!["reuse"]);
        return !!route.routeConfig?.data!["reuse"];
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return false;
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return false;
        
    }
}
