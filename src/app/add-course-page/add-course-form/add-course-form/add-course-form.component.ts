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

  onDateChange(date: Date): void {
    this.date = date;
  }
  onDurationChange(duration: number): void {
    this.duration = duration;
  }

  save(): void {
    console.log(this.title, this.description, this.duration);
  }

}
