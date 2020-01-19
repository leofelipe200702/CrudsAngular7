import { BasicAuthenticationService } from './../basic-authentication.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuth: BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let userName = this.basicAuth.getUserAuthenticated();
    let userToken = this.basicAuth.getUserToken();

    if(userName && userToken){
      req = req.clone({
        setHeaders: {
          Authorization: userToken
        }
      });
  
    }

    
    return next.handle(req);

  }
}
