import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: [
  ]
})
export class TodoPageComponent implements OnInit {
  todostatic: string = "";
  tododynamic: string = "";

  queryparmsUi:string="";
  fragmemtUI:string="";


  constructor(private activatedRoute: ActivatedRoute,private roter:Router) { }

  ngOnInit(): void {

    this.todostatic = this.activatedRoute.snapshot.params.id;

    this.activatedRoute.params.subscribe((parms: Params) => {
      this.tododynamic = parms.id;
    });

    this.activatedRoute.queryParams.subscribe((query: any) => {
       this.queryparmsUi = query.name +" "+query.family;
    });
    this.activatedRoute.fragment.subscribe((fragment: any) => {
      this.fragmemtUI = fragment;
   });

     
  }



  redirctTodos()
  {
    this.roter.navigate(['/todos'])
  }
  redirctTodosbyId()
  {
    this.roter.navigate(['/todos',150])
  }
  redirctTodosbyAll()
  {
    this.roter.navigate(
      ['/todos',150],
      {
        queryParams:{name:'vahid',family:'Ghamari'},
        fragment:'loding'
      });
  }
}
