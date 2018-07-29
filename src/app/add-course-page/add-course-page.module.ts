import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [AddCoursePageComponent, AddCourseFormComponent],
  exports: [AddCoursePageComponent]
})
export class AddCoursePageModule { }
