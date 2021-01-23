import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;

  constructor(
    private router: Router,
    private authSerivce: AuthService
  ) { }

  onSubmit() {
    this.logIn();

  }

  logIn() {
    if(this.authSerivce.logIn(this.username, this.password)) {
      this.router.navigate(['/home']);
    }
    else {
      this.loginError = true;
    }
  }

}
