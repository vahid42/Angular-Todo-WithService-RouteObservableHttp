import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from 'src/app/Shared/todo.model'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  @Input('itemTodo') todo: TodoModel;
  @Output() edit = new EventEmitter<TodoModel>();

  editstatus: boolean = false;

  // @Output() delete = new EventEmitter<Date>();
  // @Output() done = new EventEmitter<Date>();



  constructor(private todoService: TodoService) {
    this.todo = { Id: 0, content: '', done: false }

  }

  ngOnInit(): void {
  }

  onDelete(todo: TodoModel) {
    this.todoService.delete(todo);
    //this.delete.emit(key);
  }
  onDone(todo: TodoModel) {
    this.todoService.toggle(todo);

    //this.done.emit(key);
  }

  //چون در توتوز نیاز دارم کدام ایتم بوده تا تغییر کند

  editHandler(todo: TodoModel, todoevent: TodoModel) {
    todo.content = todoevent.content;
    this.todoService.edit(todo);
    this.editstatus = false;
    //this.edit.emit({key:key,text:text});
  }
}
