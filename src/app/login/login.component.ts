import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;
  rendering = false;

  constructor(
    private router: Router,
    private authSerivce: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createLoading();
  }

  onSubmit() {
    this.logIn();
  }

  createLoading(): void {
    this.rendering = true;
    setTimeout(() => {
      this.rendering = false;
    }, 1250);
  }

  logIn() {
    if(this.authSerivce.logIn(this.username, this.password)) {
      this.router.navigate(['/home']);
    }
    else {
      this.loginError = true;
      this.snackBar.open('Login e/ou senha inválido(s)', 'fechar', {
        duration: 3000
      })
    }
  }

}
