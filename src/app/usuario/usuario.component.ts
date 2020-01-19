import { Usuario, Telefone } from './../list-usuarios/list-usuarios.component';
import { UserDataService } from './../service/data/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id : number;
  usuario : Usuario
  
  constructor(
    private userService: UserDataService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.params['id'];
    var telefones = [new Telefone(-1,"","","","Celular"),
                     new Telefone(-2,"","","","Residencial"),
                     new Telefone(-3,"","","","Trabalho")]
    this.usuario = new Usuario(this.id,'','','','',telefones);
    if(this.id != -1){
      this.userService.getUsuario(this.id).subscribe(
        response => {
          this.usuario = response        
        }  
      );
    }
    
  }

  saveUsuario(){    
    if(this.id == -1){
      this.userService.createUsuario(this.usuario).subscribe(
        response => {
          this.router.navigate(['usuarios']);
        }
      );
    }else{
      this.userService.updateUsuario(this.id,this.usuario).subscribe(
        response => {
          this.router.navigate(['usuarios']);
        }
      );
    }    
  }



}
