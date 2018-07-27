import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export default class AuthorisationService {

  public fakeUser: User = {
    id: '1234',
    firstName: 'Peter',
    lastName: 'Parker',
    token: 'q86bfanyc'
  };
  constructor() {
  }
  login(): void {
    localStorage.setItem('user', JSON.stringify(this.fakeUser));
  }
  logout(): void {
    localStorage.removeItem('user');
    console.log('logout');
  }
  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    if (user && user.token === this.fakeUser.token) {
      return true;
    } else {
      return false;
    }
  }
  getUserInfo(): User {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }
}
