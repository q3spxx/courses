import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public searchText = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  changeSearchText(text: string) {
    this.searchText = text;
  }
}
