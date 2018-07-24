import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';

@Injectable({
  providedIn: 'root'
})
export default class CourseListService {

  constructor() { }

  public getCourseList(): CourseListItem[] {
    return [
      {
        id: '1',
        title: 'Video course 1',
        creationDate: new Date('05 23 2018'),
        duration: 88,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      },
      {
        id: '2',
        title: 'Video course 2',
        creationDate: new Date('06 10 2018'),
        duration: 27,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      },
      {
        id: '3',
        title: 'Video course 3',
        creationDate: new Date('07 14 2018'),
        duration: 70,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      },
      {
        id: '4',
        title: 'Video course 4',
        creationDate: new Date('07 16 2018'),
        duration: 46,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      },
      {
        id: '5',
        title: 'Video course 5',
        creationDate: new Date('08 21 2018'),
        duration: 30,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
      }
    ];
  }
}
