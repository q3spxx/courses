import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormModule } from './course-form/course-form.module';

@NgModule({
  imports: [
    CommonModule,
    CourseFormModule
  ],
  declarations: [],
  exports: [CourseFormModule]
})
export class AppFormsModule { }
