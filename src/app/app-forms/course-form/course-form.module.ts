import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DurationPickerComponent } from './duration-picker/duration-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CourseFormComponent, DatePickerComponent, DurationPickerComponent],
  exports: [CourseFormComponent]
})
export class CourseFormModule { }
