import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListFields } from '../../../interfaces/course-list-fields';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input() public title: string;
  @Input() public description: string;
  @Input() public creationDate: Date;
  @Input() public duration: number;

  @Output() save: EventEmitter<object> = new EventEmitter<object>();
  @Output() cancel: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  onDateChange(date: string): void {
    this.creationDate = new Date(date);
  }
  onDurationChange(duration: number): void {
    this.duration = duration;
  }

  onSave(): void {
    this.save.emit(new CourseListFields(this.title, this.description, this.creationDate, this.duration));
  }
  onCancel(): void {
    this.cancel.emit();
  }

}
