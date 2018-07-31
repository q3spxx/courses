import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { CoreModule } from '../core/core.module';
import { AppFormsModule } from '../app-forms/app-forms.module';
import { CoursesService } from '../services/courses/courses.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AppFormsModule,
    SharedModule
  ],
  declarations: [EditCoursePageComponent],
  providers: [CoursesService],
  exports: [EditCoursePageComponent]
})
export class EditCoursePageModule { }
