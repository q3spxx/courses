import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import CONFIG from '../../app.config';
import { User, UserData, LoginData } from '../../interfaces/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<boolean> {
    return this.http.post<LoginData>(`${CONFIG.host}/auth/login`, {
      login: login,
      password: password
    }).pipe(map((loginData: LoginData) => {
      localStorage.setItem('token', loginData.token);
      return true;
    }));
  }
  logout(): void {
    localStorage.removeItem('token');
  }
  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return this.http.post(`${CONFIG.host}/auth/userinfo`, null, {
      headers: new HttpHeaders({'Authorization': token})
    }).pipe(map(() => {
      return true;
    }));
  }
  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('token');
    return this.http.post<UserData>(`${CONFIG.host}/auth/userinfo`, null, {
      headers: new HttpHeaders({'Authorization': token})
    }).pipe(map((userData: UserData) => {
      return new User(userData.id, userData.name.first, userData.name.last);
    }));
  }
}
