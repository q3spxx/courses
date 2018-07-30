import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseListService } from '../course-list.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseListItems: CourseListItem[] = [];
  public filteredCourseListItems: CourseListItem[] = [];

  @Input() public searchText: string;
  constructor(
    private courseListService: CourseListService,
    private filter: FilterPipe
  ) { }

  ngOnInit() {
    this.getList();
    this.filterOut();
  }
  getList() {
    this.courseListItems = this.courseListService.getList();
  }
  filterOut() {
    this.filteredCourseListItems = this.filter.transform(this.courseListItems, this.searchText);
  }
  delete(id: string): void {
    if (confirm('Do you really want to delete this course?')) {
      this.courseListService.removeItem(id);
      this.getList();
      this.filterOut();
    }
  }
  edit(id: string): void {}
  onClickLoadMore(): void {
    console.log('Load more');
  }

}
