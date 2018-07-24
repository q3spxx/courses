import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxModule } from './toolbox/toolbox.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CourseListModule } from './course-list/course-list.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    CourseListModule,
    ToolboxModule
  ],
  declarations: [CoursesPageComponent],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
