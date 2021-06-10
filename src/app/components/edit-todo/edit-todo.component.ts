import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/Shared/todo.model'

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styles: [
  ]
})
export class EditTodoComponent implements OnInit {


  @Input() todo:TodoModel;

  @Output('edit') edittodo = new EventEmitter<TodoModel>();

  constructor() { 
    this.todo=new TodoModel(0,false,''); 
  }

  ngOnInit(): void {
  }

  editHandler() {
    if (this.todo.content.length > 0 ) {
        this.edittodo.emit(this.todo);} 
      }

}
