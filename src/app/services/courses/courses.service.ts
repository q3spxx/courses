import { Injectable } from '@angular/core';
import { CourseListItem } from '../../interfaces/course-list-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseListItemData } from '../../interfaces/course-list-item-data';
import CONFIG from '../../app.config';
import { map } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
import { CoursesParams } from '../../interfaces/courses-params';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  public getList(params: CoursesParams): Observable<CourseListItem[]> {
    this.loadingService.setLoading(true);
    return this.http.get<CourseListItemData[]>(`${CONFIG.host}/courses`, { params: params as any })
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
        this.loadingService.setLoading(false);
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
    this.loadingService.setLoading(true);
    return this.http.post(`${CONFIG.host}/courses`, new CourseListItemData(
      title,
      description,
      topRate,
      creationDate.toJSON(),
      duration
    )).pipe(
      map((response: Observable<Object>) => {
        this.loadingService.setLoading(false);
        return response;
      })
    );
  }
  public getItemById(id: number): Observable<CourseListItem> {
    this.loadingService.setLoading(true);
    return this.http.get(`${CONFIG.host}/courses/${id}`).pipe(
      map((data: CourseListItemData) => {
        this.loadingService.setLoading(false);
        return new CourseListItem(
          data.id,
          data.name,
          data.description,
          new Date(data.date),
          data.length,
          data.isTopRated
        )}
      ));
  }
  public updateItem(
    id: number,
    title: string,
    description: string,
    creationDate: Date,
    duration: number,
    topRate: boolean
  ): Observable<Object> {
    this.loadingService.setLoading(true);
    return this.http.put(`${CONFIG.host}/courses/${id}`, new CourseListItemData(
      title,
      description,
      topRate,
      creationDate.toJSON(),
      duration
    )).pipe(
      map((response: Observable<Object>) => {
        this.loadingService.setLoading(false);
        return response;
      })
    );
  }
  public removeItem(id: number): Observable<Object> {
    this.loadingService.setLoading(true);
    return this.http.delete(`${CONFIG.host}/courses/${id}`).pipe(
      map((response: Observable<Object>) => {
        this.loadingService.setLoading(false);
        return response;
      })
    );
  }
}
