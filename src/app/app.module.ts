import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormAddTodoComponent } from './components/form-add-todo/form-add-todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

import { NoteListPageComponent } from './pages/notes/note-list-page/note-list-page.component';
import { NoteOnePageComponent } from './pages/notes/note-one-page/note-one-page.component';
import { NoteTowPageComponent } from './pages/notes/note-tow-page/note-tow-page.component';
import { NoteThreePageComponent } from './pages/notes/note-three-page/note-three-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


import { TodoService } from './services/todo.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const rotes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'todos', children: [
      { path: '', component: TodosPageComponent },
      { path: ':id', component: TodoPageComponent }
    ]
  },
  { path: 'about', component: AboutPageComponent,canActivate:[AuthGuardService] },
  {
    path: 'note-list', component: NoteListPageComponent, children: [
      { path: '1', component: NoteOnePageComponent },
      { path: '2', component: NoteTowPageComponent },
      { path: '3', component: NoteThreePageComponent },
    ],canActivateChild:[AuthGuardService]
  },
  //{path:'404',component:NotFoundPageComponent},
  // {path:'**',redirectTo:'/404'}
  { path: '**', component: NotFoundPageComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormAddTodoComponent,
    TodosComponent,
    TodoComponent,
    EditTodoComponent,
    HomePageComponent,
    TodosPageComponent,
    AboutPageComponent,
    TodoPageComponent,
    NoteListPageComponent,
    NoteOnePageComponent,
    NoteTowPageComponent,
    NoteThreePageComponent,
    NotFoundPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(rotes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
