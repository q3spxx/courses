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
  ): Observable<Object> {
    return this.http.post(`${CONFIG.host}/courses`, new CourseListItemData(
      title,
      description,
      topRate,
      creationDate.toJSON(),
      duration
    ));
  }
  public getItemById(id: number): Observable<CourseListItem> {
    return this.http.get(`${CONFIG.host}/courses/${id}`).pipe(map((data: CourseListItemData) => {
      return new CourseListItem(
        data.id,
        data.name,
        data.description,
        new Date(data.date),
        data.length,
        data.isTopRated
      );
    }));
  }
  public updateItem(
    id: number,
    title: string,
    description: string,
    creationDate: Date,
    duration: number,
    topRate: boolean
  ): Observable<Object> {
    return this.http.put(`${CONFIG.host}/courses/${id}`, new CourseListItemData(
      title,
      description,
      topRate,
      creationDate.toJSON(),
      duration
    ));
  }
  public removeItem(id: number): Observable<Object> {
    return this.http.delete(`${CONFIG.host}/courses/${id}`);
  }
}
