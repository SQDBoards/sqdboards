import {
  ActivatedRouteSnapshot,
  BaseRouteReuseStrategy,
  DetachedRouteHandle,
} from '@angular/router';

var storage = new Map<string, DetachedRouteHandle>();

export class BuilderReuse implements BaseRouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.url.toString() === 'builder' ? true : false;
  }
  store(
    route: ActivatedRouteSnapshot,
    detachedTree: DetachedRouteHandle
  ): void {
    storage.set(route.url.toString(), detachedTree);
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return route.url.toString() === 'builder' ? true : false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!storage.get(route.url.toString())) return null;
    return !storage.get(route.url.toString());
  }
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    // console.log(future.fragment?.toString())
    // return future.data['reuse'];
    return true;
  }
}
