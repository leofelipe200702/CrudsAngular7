import { environment } from './../../../environments/environment';
import { Todo } from './../../list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) {

  }

  findAllTodos(username) {
    return this.httpClient.get<Todo[]>(`${environment.API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`${environment.API_URL}/users/${username}/todos/${id}`);
  }

  findTodo(username, id) {
    return this.httpClient.get<Todo>(`${environment.API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(
      `${environment.API_URL}/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username, todo) {
    return this.httpClient.post(
      `${environment.API_URL}/users/${username}/todos`,
      todo
    );
  }


}
