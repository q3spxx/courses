import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorisationService } from '../services/authorisation/authorisation.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthorisationService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated() ? true : false;
  }
}
