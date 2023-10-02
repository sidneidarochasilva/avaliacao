import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from "@angular/common/http";
import {Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() {}
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

      if (request.url.includes("http") || request.url.includes("https")) {
       
        request = request.clone({
            url: request.url,
            setHeaders: {
                "Access-Control-Allow-Origin": "*",
                "APP-ID":"64e125cf5a73b16652ff93e5"
            },
        });
    }

        return next.handle(request);
    }
}
