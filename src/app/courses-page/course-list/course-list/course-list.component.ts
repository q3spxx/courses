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
  public courseListItems: CourseListItem[];

  @Input() public searchText: string;
  constructor(
    private courseListService: CourseListService,
    private filter: FilterPipe
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {
    const courseListItems: CourseListItem[] = this.courseListService.getCourseList();
    this.courseListItems = this.filter.transform(courseListItems, this.searchText);
  }
  delete(id: string): void {
    console.log(id);
  }
  onClickLoadMore(): void {
    console.log('Load more');
  }

}
