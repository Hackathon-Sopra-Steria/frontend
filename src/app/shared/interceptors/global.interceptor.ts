import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        req = req.clone({
            setHeaders: {
              Authorization: localStorage.getItem('token')
            }
          });


        return next.handle(req);
    }
}