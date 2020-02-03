import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export const TOKEN = 'token';
export const USERAUTHENTICATED = 'userAuthenticated';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeJWTAuthentication(username, password) {
    
    return this.httpClient.post<any>(`${environment.API_URL}/authenticate`,
      { username,
        password }).pipe(
        map(
          data => {
            sessionStorage.setItem(USERAUTHENTICATED, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          })
      );
  }

  executeBasicAuthentication(username, password) {

    const basicAuth = this.createAuthBasicHttpHeader(username, password);

    const headers = new HttpHeaders({
      Authorization: basicAuth
    });

    return this.httpClient.get<BasicAuthenticationBean>(`${environment.API_URL}/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem(USERAUTHENTICATED, username);
            sessionStorage.setItem(TOKEN, basicAuth);
            return data;
          })
      );
  }

  createAuthBasicHttpHeader(username: string, password: string) {
    const basicAuth = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuth;
  }

  getUserAuthenticated() {
    return sessionStorage.getItem(USERAUTHENTICATED);
  }

  getUserToken() {
    if (this.getUserAuthenticated) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserAuthenticated() {
    const user = sessionStorage.getItem(USERAUTHENTICATED);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(USERAUTHENTICATED);
    sessionStorage.removeItem(TOKEN);
  }
}

export class BasicAuthenticationBean {
  constructor(public message: string) {

  }
}
