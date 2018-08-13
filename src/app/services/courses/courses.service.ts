import { Injectable } from '@angular/core';
import { CourseListItem } from '../../interfaces/course-list-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseListItemData } from '../../interfaces/course-list-item-data';
import CONFIG from '../../app.config';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courseListItems: CourseListItem[] = [];

  constructor(private http: HttpClient) { }

  public getList(start: number, count: number, textFragment: string): Observable<CourseListItem[]> {
    return this.http.get<CourseListItemData[]>(`${CONFIG.host}/courses?start=${start}&count=${count}&textFragment=${textFragment}`)
    .pipe(map((coursesData: CourseListItemData[]) => {
        const courses = coursesData.map((courseData: CourseListItemData) => {
          return new CourseListItem(
            courseData.id,
            courseData.name,
            courseData.description,
            new Date(courseData.date),
            courseData.length,
            courseData.isTopRated
          );
        });
        return courses;
      })
    )
  }
  public createItem(
    title: string,
    description: string,
    creationDate: Date,
    duration: number,
    topRate: boolean
  ): void {
    console.log(111);
    this.http.post('/courses/new', {
      title,
      description,
      creationDate: creationDate.toJSON(),
      duration,
      topRate
    }).subscribe();
  }
  public getItemById(id: number): CourseListItem {
    for (let i = 0; i < this.courseListItems.length; i++) {
      if (this.courseListItems[i].id === id) {
        return this.courseListItems[i];
      }
    }
  }
  public updateItem(
    id: number,
    title: string,
    description: string,
    creationDate: Date,
    duration: number,
    topRate: boolean
  ): void {
    for (let i = 0; i < this.courseListItems.length; i++) {
      if (this.courseListItems[i].id === id) {
        const item = this.courseListItems[i];
        item.title = title;
        item.description = description;
        item.creationDate = creationDate;
        item.duration = duration;
        item.topRate = topRate;
        return;
      }
    }
  }
  public removeItem(id: number): void {
    for (let i = 0; i < this.courseListItems.length; i++) {
      if (this.courseListItems[i].id === id) {
        this.courseListItems.splice(i, 1);
        return;
      }
    }
  }
}
