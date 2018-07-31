import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../../services/authorisation/authorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(private authService: AuthorisationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.login();
    this.auth();
  }
  auth() {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/courses');
    }
  }

}
