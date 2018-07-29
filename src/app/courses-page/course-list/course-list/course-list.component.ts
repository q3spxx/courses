import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import CourseListService from '../course-list.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [ FilterPipe ]
})
export class CourseListComponent implements OnInit, OnChanges {
  public courseListItems: CourseListItem[] = [];

  @Input() public searchText: string;
  constructor(
    private courseListService: CourseListService,
    private filter: FilterPipe
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.getList();
  }
  getList() {
    const courseListItems: CourseListItem[] = this.courseListService.getList();
    this.courseListItems = this.filter.transform(courseListItems, this.searchText);
  }
  delete(id: string): void {
    if (confirm('Do you really want to delete this course?')) {
      this.courseListService.removeItem(id);
      this.getList();
    }
  }
  onClickLoadMore(): void {
    console.log('Load more');
  }

}
