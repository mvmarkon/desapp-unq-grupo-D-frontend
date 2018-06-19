import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public userservice: UserService) {}
  public usertokenid = this.userservice.getCurrentUser().idToken;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      // setHeaders: {
      //   Authorization: 'Bearer' + this.usertokenid
      // }
    });
    return next.handle(request);
  }
}
