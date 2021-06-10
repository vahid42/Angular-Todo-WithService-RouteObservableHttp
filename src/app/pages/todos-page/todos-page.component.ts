import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from 'src/app/Shared/todo.model';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styles: [
  ]
})
export class TodosPageComponent implements OnInit {

  todos: TodoModel[] = [];


  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
     this.todos = this.todoService.list()
     //this.todoService.todosChanged.subscribe(todos => this.todos = todos)

   }

}
