import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { toCMS } from "./toCMS.context-token";

const cmsUrl: string = "https://sqdboards-strapi.herokuapp.com/api";

@Injectable()
export class RouteToCMSInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.context.get(toCMS))
      request = request.clone({
        url: cmsUrl + request.url
      });
    return next.handle(request);
  }
}
