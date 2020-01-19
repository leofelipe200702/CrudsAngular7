import { API_URL } from './../../app.constants';
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
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  findTodo(username, id) {
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(
      `${API_URL}/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username, todo) {
    return this.httpClient.post(
      `${API_URL}/users/${username}/todos`,
      todo
    );
  }


}
