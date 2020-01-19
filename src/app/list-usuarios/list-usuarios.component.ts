import { UserDataService } from './../service/data/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export class Telefone{
  constructor(public id: number,
    public number: string,
    public areaCode: string,
    public countryCode: string,
    public tipoTelefone: string){

  }
}

export class Usuario {
  constructor(public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public telefones: Telefone[]) {
  }
}

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  message = '';

  constructor(private serviceUser: UserDataService,
    private router: Router) { }

  ngOnInit() {
    this.refreshUsuarios();
  }

  refreshUsuarios(){
    this.serviceUser.findAll().subscribe(
      response => this.handleDataResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleDataResponse(response) {
    this.usuarios = response;
  }

  handleErrorResponse(error) {
    console.log(error);
  }

  deleteUsuario(idUsuario) {
    this.serviceUser.deleteUsuario(idUsuario).subscribe(
      response => {
        this.message = 'Usuário Excluído com Sucesso';
        this.refreshUsuarios();
      }
    );
  }

  updateUsuario(idUsuario){
    this.router.navigate(['usuarios',idUsuario]);
  }

  addUsuario(){
    this.router.navigate(['usuarios',-1]);
  }

}
