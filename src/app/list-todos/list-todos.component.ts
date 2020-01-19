import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  messageSuccess: String;

  constructor(private service: TodoDataService,
    private router: Router) {

  }

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos() {
    this.service.findAllTodos('in28minutes').subscribe(
      response => {
        this.todos = response;
      },
      error => {

      }
    );
  }
  deleteTodo(id) {
    this.service.deleteTodo('in28minutes', id).subscribe(
      response => {
        this.messageSuccess = `Tarefa ${id} Removida com Sucesso`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }


}
