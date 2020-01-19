import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('userAuthenticated', username);
      return true;
    }
    return false;
  }

  isUserAuthenticated() {
    const user = sessionStorage.getItem('userAuthenticated');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('userAuthenticated');
  }
}
