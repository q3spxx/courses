import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../../services/authorisation/authorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  public login = '';
  public password = '';
  public error = false;
  public errorMess = '';

  constructor(private authService: AuthorisationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.login(this.login, this.password).subscribe(() => {
      this.error = false;
      this.errorMess = '';
      this.router.navigateByUrl('/courses');
    }, err => {
      this.error = true;
      this.errorMess = err.error;
    });
  }

}
