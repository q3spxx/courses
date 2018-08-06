import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../../../services/authorisation/authorisation.service';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuth = false;
  public user: User;

  constructor(
    private authService: AuthorisationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((isAuth: boolean) => {
      this.isAuth = isAuth;
      if (isAuth) this.user = this.authService.getUserInfo();
    });
  }
  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
