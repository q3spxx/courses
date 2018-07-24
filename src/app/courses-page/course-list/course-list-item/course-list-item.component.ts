import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../course-list-item';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})

export class CourseListItemComponent implements OnInit {
  constructor() { }
  @Input() public courseItem: CourseListItem;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }

  onDelete(): void {
    this.delete.emit(this.courseItem.id);
  }

}
