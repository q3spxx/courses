import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import CONFIG from '../../app.config';
import { User, UserData, LoginData } from '../../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  private user: User;
  private isAuth = false;

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post<LoginData>(`${CONFIG.host}/auth/login`, {
        login: login,
        password: password
      }).subscribe((loginData: LoginData) => {
        localStorage.setItem('token', loginData.token);
        this.getUser(loginData.token).subscribe((userData: UserData) => {
          this.setUser(userData);
          this.isAuth = true;
          observer.next(true);
        });
      }, err => {
        observer.error(err);
      });
    });
  }
  logout(): void {
    this.user = undefined;
    this.isAuth = false;
    localStorage.removeItem('token');
  }
  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      if (this.isAuth) observer.next(true);
      const token = localStorage.getItem('token');
      if (!token) observer.next(false);
      this.http.post<UserData>(`${CONFIG.host}/auth/userinfo`, null, {
        headers: new HttpHeaders({'Authorization': token})
      }).subscribe((userData: UserData) => {
        this.setUser(userData);
        observer.next(true);
      }, () => {
        observer.next(false);
      });
    });
  }
  getUser(token): Observable<UserData> {
    return this.http.post<UserData>(`${CONFIG.host}/auth/userinfo`, null, {
      headers: new HttpHeaders({'Authorization': token})
    });
  }
  setUser(userData: UserData) {
    this.user = new User(userData.id, userData.name.first, userData.name.last);
  }
  getUserInfo(): User {
    return this.user;
  }
}
