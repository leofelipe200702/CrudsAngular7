import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  messageFromService: string;
  messageFromError: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.activedRoute.snapshot.params['name'];
  }

  getMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getMessageWithVariable() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessResponse(response) {
    this.messageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.messageFromError = error.error.message;
  }

}
