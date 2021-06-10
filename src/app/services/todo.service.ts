 import { Injectable ,EventEmitter} from '@angular/core';
 import { TodoModel } from '../Shared/todo.model';
 
// @Injectable({
//   providedIn: 'root'
// })
export class TodoService {
  todosChanged = new EventEmitter<TodoModel[]>();

  todos: TodoModel[] = [
    { Id: 1, done: false, content: 'Vahid Ghamari' },
    { Id: 2, done: false, content: 'Nazila AlahKarami' }
  ];




  constructor() { }

  list() {
    return this.todos;
  }

  add(todo: TodoModel) {
    // this.todos = [
    //   ...this.todos, todo
    // ]
    // this.todosChanged.emit(this.todos);
    this.todos.push(todo);

  }

  edit(todo: TodoModel) {

    let indexTodo = this.todos.findIndex(item => item.Id === todo.Id);
     this.todos[indexTodo].content = this.todos[indexTodo].content;
     // this.todos.map(item => {
    //   if (item.Id == todo.Id) {
    //     return {
    //       ...item, content: todo.content,
    //     }
    //   } else {
    //     return item;
    //   }
    // });
  }

  delete(todo: TodoModel) {
    let indexTodo = this.todos.findIndex(item => item.Id == todo.Id);
    console.log(indexTodo);
    console.log(todo);
    this.todos.splice(indexTodo,1);
   // this.todos = this.todos.filter(item => item.Id != todo.Id)
  }

  toggle(todo: TodoModel) {
    let indexTodo = this.todos.findIndex(item => item.Id === todo.Id);
    this.todos[indexTodo].done=!this.todos[indexTodo].done;
    // this.todos = this.todos.map(item => {
    //   if (item.Id == todo.Id) {
    //     return {

    //       ...item,
    //       done: !item.done
    //     }
    //   }
    //   return item;
    // })
  }

}
