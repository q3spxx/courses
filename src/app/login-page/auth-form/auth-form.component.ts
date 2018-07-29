import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../../authorisation/authorisation.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(private authService: AuthorisationService) { }

  ngOnInit() {
    this.authService.logout();
  }

  onLogin(): void {
    this.authService.login();
  }

}
