import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  msgError = 'Dados Inválidos!';
  loginInvalido = false;
  constructor(private router: Router,
    private basicAuthentication: BasicAuthenticationService) { }

  ngOnInit() {
  }  


  handleJWTAuthLogin(){
    this.basicAuthentication.executeJWTAuthentication(this.username, this.password).subscribe(
      data => {
          //console.log(data);
          this.loginInvalido = false;
          this.router.navigate(['home']);
      },
      error =>{
        console.log(error);
        this.loginInvalido = true;
      }
    ); 
  }  

  handleBasicAuthLogin() {
    this.basicAuthentication.executeBasicAuthentication(this.username, this.password).subscribe(
      data => {
          //console.log(data);
          this.loginInvalido = false;
          this.router.navigate(['home',]);
      },
      error =>{
        console.log(error);
        this.loginInvalido = true;
      }
    ); 
  }
}
