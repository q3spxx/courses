import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CourseListItem } from '../../../interfaces/course-list-item';
import { CoursesService } from '../../../services/courses/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseListItems: CourseListItem[] = [];
  private page = 0;
  private count = 5;
  private _searchText = '';


  @Input()
  set searchText (value: string) {
    this._searchText = value;
    this.page = 0;
    this.count = 5;
    this.getList();
  }
  get searchText () {
    return this._searchText;
  }

  constructor(
    private coursesService: CoursesService,
    private router: Router,
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
    if (confirm(`Do you really want to delete this course with id=${id}?`)) {
      this.coursesService.removeItem(id).subscribe(() => {
        this.getList();
      }, () => {
        this.router.navigateByUrl('/login');
      });
    }
  }
  edit(id: number): void {
    this.router.navigate(['courses', id]);
  }
  onClickLoadMore(): void {
    if (this.courseListItems.length === 0) {
      this.page = 0;
    } else {
      this.page++;
    }
    this.getList();
  }
}
