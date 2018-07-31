import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  private user: User;
  private token = 'q86bfanyc';
  constructor() {}
  login(): void {
    localStorage.setItem('token', this.token);
    this.fetchUserInfo();
  }
  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token === this.token ? true : false;
  }
  fetchUserInfo():void {
    this.user = {
      id: '1234',
      firstName: 'Peter',
      lastName: 'Parker'
    };
  }
  getUserInfo(): User {
    return this.user;
  }
}
