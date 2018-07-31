import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../../interfaces/course-list-item';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courseList: CourseListItem[]): CourseListItem[] {
    return courseList.sort((a, b) => {
      return a.creationDate.getTime() < b.creationDate.getTime() ? 1 : -1;
    });
  }

}
