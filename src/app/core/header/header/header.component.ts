import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../../../authorisation/authorisation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authorisationService: AuthorisationService) { }

  ngOnInit() {
  }
  isAuth(): boolean {
    return this.authorisationService.isAuthenticated();
  }
  onLogout(): void {
    this.authorisationService.logout();
  }

}
