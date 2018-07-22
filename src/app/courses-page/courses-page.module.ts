import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { ToolboxModule } from './toolbox/toolbox.module';
import { FooterModule } from './footer/footer.module';
import { CourseListModule } from './course-list/course-list.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbsModule,
    ToolboxModule,
    CourseListModule,
    FooterModule
  ],
  declarations: [CoursesPageComponent],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
