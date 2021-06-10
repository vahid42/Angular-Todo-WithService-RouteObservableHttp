import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/Shared/todo.model'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})
export class TodosComponent implements OnInit {

  donestatus: boolean = false;
  @Input() todos: TodoModel[] = [];
  
  // @Output() delete = new EventEmitter<Date>();
  // @Output() done = new EventEmitter<Date>();
  // @Output() edit = new EventEmitter<{ key: Date, text: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  // onDelete(key: any) {
  //   this.delete.emit(key);
  // }
  // onDone(key: any) {
  //   this.done.emit(key);
  // }
  // editHandler(todo: { key: Date; text: string; }) {
  //   this.edit.emit(todo);
  // }

  filtertosos() {
    return this.todos.filter(i => i.done == this.donestatus);
  }

  get doneTodos() {
    return this.todos.filter(item => item.done != false)
  }

  get unDoneTodos() {
    return this.todos.filter(item => item.done === false)
  }
}
