import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { AddCourseFormModule } from './add-course-form/add-course-form.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AddCourseFormModule
  ],
  declarations: [AddCoursePageComponent],
  exports: [AddCoursePageComponent]
})
export class AddCoursePageModule { }
