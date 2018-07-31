import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from './services/authorisation/authorisation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'courses';
  constructor(private authService: AuthorisationService) {}
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.authService.fetchUserInfo();
    }
  }
}
