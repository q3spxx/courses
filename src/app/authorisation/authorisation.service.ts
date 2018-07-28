import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export default class AuthorisationService {

  public fakeUser: User = {
    id: '1234',
    firstName: 'Peter',
    lastName: 'Parker'
  };
  private token = 'q86bfanyc';
  constructor() {}
  login(): void {
    console.log('logged in successfully');
    // localStorage.setItem('token', this.token);
  }
  logout(): void {
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
    return this.fakeUser;
  }
}
