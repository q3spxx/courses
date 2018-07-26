import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listItems: CourseListItem[], searchText: string): CourseListItem[] {
    return listItems.filter((item) => {
      const title = item.title.toLowerCase();
      const text = searchText.toLowerCase();
      if (title.search(text) !== -1) {
        return true;
      } else {
        return false;
      }
    });
  }

}
