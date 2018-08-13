import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
export class CourseListComponent implements OnInit {
  public courseListItems: CourseListItem[] = [];
  public filteredCourseListItems: CourseListItem[] = [];
  private page = 0;
  private count = 5;
  private _searchText = '';


  @Input()
  set searchText (value: string) {
    if (this._searchText !== value) {
      this._searchText = value;
      this.getList();
    }
  }
  get searchText () {
    return this._searchText;
  }

  constructor(
    private coursesService: CoursesService,
    private filter: FilterPipe,
    private router: Router,
    private authService: AuthorisationService
  ) { }

  ngOnInit() {
    this.getList();
  }
  getList() {
    this.coursesService.getList(this.page * this.count, this.count, this.searchText)
      .subscribe((courseListItems: CourseListItem[]) => {
        this.courseListItems = courseListItems;
    });
  }
  delete(id: number): void {
    if (this.authService.isAuthenticated()) {
      if (confirm('Do you really want to delete this course?')) {
        this.coursesService.removeItem(id).subscribe(() => {
          this.getList();
        });
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  edit(id: string): void {
    this.router.navigate(['courses', id]);
  }
  onClickLoadMore(event): void {
    this.page++;
    this.getList();
  }
}
