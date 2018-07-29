import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  private user: User;
  private token = 'q86bfanyc';
  constructor() {}
  login(): void {
    const fakeUser = {
      id: '1234',
      firstName: 'Peter',
      lastName: 'Parker'
    };
    const fakeToken = 'q86bfanyc';
    this.user = fakeUser;
    localStorage.setItem('token', fakeToken);
    console.log('logged in successfully');
  }
  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
    console.log('logout');
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === this.token) {
      return true;
    } else {
      return false;
    }
  }
  getUserInfo(): User {
    return this.user;
  }
}
