import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

import { WebinAuthenticationService } from './webin-authentication.service';
import { environment } from '../environments/environment';

@Injectable()
export class WebinAuthenticationInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.startsWith(environment.webinAuthenticationServiceUrl)) {
      console.log('** Webin authentication interceptor **');
      const webinAuthenticationService = this.injector.get(WebinAuthenticationService);

      /* if (req.url.startsWith(environment.webinReportServiceUrl)) {
      */
        const authReq = req.clone({headers: req.headers.set('Authorization', webinAuthenticationService.getAuthorizationTokenHeader())});
        return next.handle(authReq);
      /* }
      else {
        const authReq = req.clone({headers: req.headers.set('Authorization', webinAuthenticationService.getAuthorizationHeader())});
        return next.handle(authReq);
      }
      */

    } else {
       return next.handle(req);
    }
  }
}
