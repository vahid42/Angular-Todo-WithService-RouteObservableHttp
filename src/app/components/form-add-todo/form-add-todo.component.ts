import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from 'src/app/Shared/todo.model'
@Component({
  selector: 'app-form-add-todo',
  templateUrl: './form-add-todo.component.html',
  styles: [
  ]
})
export class FormAddTodoComponent implements OnInit {

  textTodo: string = "";
  todo: TodoModel={ Id:  Date.now(), content: '', done: false };
  // @Output('add') addTodo = new EventEmitter<string>();


  constructor(private todoService: TodoService) {
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.textTodo.length > 0) {
      this.todo=
              new TodoModel(Date.now(),false,this.textTodo)
      this.todoService.add(this.todo);
      this.textTodo = '';
    }

  }

}
