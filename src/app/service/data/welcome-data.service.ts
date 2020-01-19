import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {
  constructor(private httpClient: HttpClient) {
  }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
  }
}
