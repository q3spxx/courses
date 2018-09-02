import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthorisationService } from '../services/authorisation/authorisation.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthorisationService,
    private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this.authService.isAuthenticated().pipe(
        catchError((err: any) => {
          this.router.navigateByUrl('/login');
          return of(false);
        })
      );
  }
}
