import { API_URL } from './../../app.constants';
import { Usuario } from './../../list-usuarios/list-usuarios.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Usuario[]>(`${API_URL}/usuarios`);
  }

  deleteUsuario(idUsuario){
    return this.http.delete(`http://localhost:8080/usuarios/${idUsuario}`);
  }

  getUsuario(idUsuario){
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${idUsuario}`); 
  }

  updateUsuario(idUsuario,usuario){
    return this.http.put(`http://localhost:8080/usuarios/${idUsuario}`,usuario);
  }

  createUsuario(usuario) {
    return this.http.post(
      `${API_URL}/usuarios`,usuario
    );
  }
}
