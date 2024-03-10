import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  loginType = "";
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit():  void{}

  login() {
    if (this.username.trim().length === 0) {
      this.errorMessage = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMessage = "Password is required";
    } else {
      this.errorMessage = "";
      let res = this.authService.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMessage = "Invalid Credentials";
      }
    }
  }
}

//export { LoginComponent }; // Export the LoginComponent class
