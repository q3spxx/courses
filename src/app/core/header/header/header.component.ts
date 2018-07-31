import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../../../services/authorisation/authorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authorisationService: AuthorisationService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  isAuth(): boolean {
    return this.authorisationService.isAuthenticated();
  }
  onLogout(): void {
    this.authorisationService.logout();
    this.router.navigateByUrl('/login');
  }

}
