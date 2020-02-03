import { environment } from './../../../environments/environment';
import { Usuario } from './../../list-usuarios/list-usuarios.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Usuario[]>(`${environment.API_URL}/usuarios`);
  }

  deleteUsuario(idUsuario){
    return this.http.delete(`${environment.API_URL}/usuarios/${idUsuario}`);
  }

  getUsuario(idUsuario){
    return this.http.get<Usuario>(`${environment.API_URL}/usuarios/${idUsuario}`); 
  }

  updateUsuario(idUsuario,usuario){
    return this.http.put(`${environment.API_URL}/usuarios/${idUsuario}`,usuario);
  }

  createUsuario(usuario) {
    return this.http.post(
      `${environment.API_URL}/usuarios`,usuario
    );
  }
}
