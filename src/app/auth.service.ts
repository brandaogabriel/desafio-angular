import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username = 'concert';
  private password = 'prova';

  constructor() {}

  logIn(responseUsername: string, responsePassword: string): boolean {
    if (
      this.username === responseUsername &&
      this.password === responsePassword
    ) {
      return true;
    }
    return false;
  }

}
