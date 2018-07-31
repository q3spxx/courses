import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorisationService } from '../../services/authorisation/authorisation.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public searchText = '';

  constructor(private authService: AuthorisationService, private router: Router) {
  }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
  }

  changeSearchText(text: string) {
    this.searchText = text;
  }
}
