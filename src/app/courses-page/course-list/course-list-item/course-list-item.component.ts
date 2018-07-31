import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';
import { CourseListItem } from '../../../interfaces/course-list-item';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseListItemComponent implements OnInit {
  constructor() { }
  @Input() public courseItem: CourseListItem;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {}

  onDelete(): void {
    this.delete.emit(this.courseItem.id);
  }
  onEdit(): void {
    this.edit.emit(this.courseItem.id);
  }

}
