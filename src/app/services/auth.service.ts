import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
 // selector: 'app-services',
 // templateUrl: './services.component.html',
 // styleUrl: './services.component.css'
 })
export class AuthService {

  constructor(private router: Router){}

  login(uname: String, pword: string){
    if (uname === 'admin' && pword === 'admin'){
      return 200;
    }else {
      return 403;
    }
  }
  logout() {
    this.router.navigate(['login']);
  }
}
