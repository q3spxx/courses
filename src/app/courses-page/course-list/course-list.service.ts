import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor() { }

  public getCourseList(): CourseListItem[] {
    return [
      {
        id: 1,
        title: 'Video course 1',
        creationDate: '05.23.2018',
        duration: 88,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      },
      {
        id: 2,
        title: 'Video course 2',
        creationDate: '06.10.2018',
        duration: 27,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      },
      {
        id: 3,
        title: 'Video course 3',
        creationDate: '07.14.2018',
        duration: 70,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      },
      {
        id: 4,
        title: 'Video course 4',
        creationDate: '07.16.2018',
        duration: 46,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      },
      {
        id: 5,
        title: 'Video course 5',
        creationDate: '08.21.2018',
        duration: 30,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      }
    ];
  }
}
