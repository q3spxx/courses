import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { CoursesService } from '../services/courses/courses.service';
import { AppFormsModule } from '../app-forms/app-forms.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AppFormsModule,
    SharedModule
  ],
  declarations: [AddCoursePageComponent],
  providers: [CoursesService],
  exports: [AddCoursePageComponent]
})
export class AddCoursePageModule { }
