import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';

@Injectable({
  providedIn: 'root'
})
export default class CourseListService {

  private courseListItems: CourseListItem[] = [
    {
      id: '1',
      title: 'Video course 1',
      creationDate: new Date('05 23 2018'),
      duration: 88,
      topRate: true,
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
      topRate: false,
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
      topRate: true,
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
      topRate: false,
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
      topRate: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
      'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
    }
  ];

  constructor() { }

  public getList(): CourseListItem[] {
    return this.courseListItems;
  }
  public createItem(
    title: string,
    creationDate: Date,
    duration: number,
    description: string,
    topRate: boolean
  ): void {
    const id =  Math.random().toString(36).substr(2, 9);
    this.courseListItems.push(new CourseListItem(
      id,
      title,
      creationDate,
      duration,
      topRate,
      description
    ));
  }
  public getItemById(id: string): CourseListItem {
    for (let i = 0; i < this.courseListItems.length; i++) {
      if (this.courseListItems[i].id === id) {
        return this.courseListItems[i];
      }
    }
  }
  public updateItem(
    id: string,
    title: string,
    creationDate: Date,
    duration: number,
    description: string,
    topRate: boolean
  ): void {
    for (let i = 0; i < this.courseListItems.length; i++) {
      if (this.courseListItems[i].id === id) {
        const item = this.courseListItems[i];
        item.title = title;
        item.creationDate = creationDate;
        item.duration = duration;
        item.topRate = topRate;
        item.description = description;
        return;
      }
    }
  }
  public removeItem(id: string): void {
    for (let i = 0; i < this.courseListItems.length; i++) {
      if (this.courseListItems[i].id === id) {
        this.courseListItems.splice(i, 1);
        return;
      }
    }
  }
}
