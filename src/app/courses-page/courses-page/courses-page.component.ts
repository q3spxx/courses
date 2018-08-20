import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public searchText = '';

  constructor() {
  }

  ngOnInit() {
  }

  changeSearchText(text: string) {
    this.searchText = text;
  }
}
