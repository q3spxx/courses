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
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
  }
}
