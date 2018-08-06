import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorisationService } from '../services/authorisation/authorisation.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthorisationService,
    private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return new Observable<boolean>(observer => {
        this.authService.isAuthenticated().subscribe((isAuth: boolean) => {
          if (isAuth) {
            observer.next(true);
          } else {
            this.router.navigateByUrl('/login');
            observer.next(false);
          }
        });
      });
  }
}
