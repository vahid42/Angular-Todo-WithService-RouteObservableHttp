import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  constructor() { }


  logIn() {
    return this.isAuth = true;
  }

  logOut() {
    return this.isAuth = false;
  }

  
  check() {
    return new Promise(
      (resole, reject) => {
        setTimeout(() => { resole(this.isAuth)}, 1000 )
      })

  }
}
