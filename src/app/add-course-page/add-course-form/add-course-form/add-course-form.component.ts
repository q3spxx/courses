import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent implements OnInit {

  public title = '';
  public description = '';
  public date = new Date();
  public duration = 0;

  constructor() { }

  ngOnInit() {
  }

  onDateChange(date: string): void {
    this.date = new Date(date);
  }
  onDurationChange(duration: number): void {
    this.duration = duration;
  }

  save(): void {}
  cancel(): void {}

}
