import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DurationPickerComponent } from './duration-picker/duration-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AddCourseFormComponent, DatePickerComponent, DurationPickerComponent],
  exports: [AddCourseFormComponent]
})
export class AddCourseFormModule { }
