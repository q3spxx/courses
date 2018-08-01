import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { CourseListItem } from '../../../interfaces/course-list-item';
import { CoursesService } from '../../../services/courses/courses.service';
import { FilterPipe } from '../filter.pipe';
import { Router } from '@angular/router';
import { AuthorisationService } from '../../../services/authorisation/authorisation.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, DoCheck {
  public courseListItems: CourseListItem[] = [];
  public filteredCourseListItems: CourseListItem[] = [];

  @Input() public searchText: string;
  constructor(
    private courseListService: CoursesService,
    private filter: FilterPipe,
    private router: Router,
    private authService: AuthorisationService
  ) { }

  ngOnInit() {
    this.getList();
  }
  ngDoCheck() {
    this.filterOut();
  }
  getList() {
    this.courseListItems = this.courseListService.getList();
  }
  filterOut() {
    this.filteredCourseListItems = this.filter.transform(this.courseListItems, this.searchText);
  }
  delete(id: string): void {
    if (this.authService.isAuthenticated()) {
      if (confirm('Do you really want to delete this course?')) {
        this.courseListService.removeItem(id);
        this.getList();
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  edit(id: string): void {
    this.router.navigate(['courses', id]);
  }
  onClickLoadMore(): void {
    console.log('Load more');
  }

}
