import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { FreshBorderDirective } from './fresh-border.directive';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { CoursesService } from '../../services/courses/courses.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    FreshBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
  ],
  providers: [CoursesService, FilterPipe],
  exports: [CourseListComponent]
})
export class CourseListModule { }
