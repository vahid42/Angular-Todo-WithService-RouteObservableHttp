import { Component, OnInit } from '@angular/core';
 import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {

    let obs = new Observable(
      (sub) => {
        let count = 0;
        setInterval(
          () =>{
            if (count > 5) { sub.complete()}
            count++;
            sub.next(count);
          }, 1000)
      });

    obs.subscribe(data=> console.log(data) )
 }


}
