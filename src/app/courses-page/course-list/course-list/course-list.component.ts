import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import CourseListService from '../course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseListItems: CourseListItem[];

  constructor(private courseListService: CourseListService) { }

  ngOnInit() {
    this.courseListItems = this.courseListService.getCourseList();
  }
  delete(id: string): void {
    console.log(id);
  }
  onClickLoadMore(): void {
    console.log('Load more');
  }

}
