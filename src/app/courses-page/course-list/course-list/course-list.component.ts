import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CourseListItem } from '../../../interfaces/course-list-item';
import { CoursesService } from '../../../services/courses/courses.service';
import { Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { filter, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseListItems: CourseListItem[] = [];
  private page = 0;
  private count = 5;
  private searchText = '';

  @Input() searchTextStream: Subject<string>;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.searchTextStream
      .pipe(
        filter(value => {
          if (value.length < 3 && this.searchText.length > value.length) {
            return true;
          } else if (value.length > 2) {
            return true;
          } else {
            return false;
          }
        }),
        debounce(() => timer(1000))
      )
      .subscribe((value) => {
      this.searchText = value;
      this.page = 0;
      this.count = 5;
      this.getList();
    });
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
