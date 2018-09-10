import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CoursesService } from "../../../services/courses/courses.service";
import { CoursesActionType, LoadCourses, FetchCourses } from "../actions/courses.actions";
import { mergeMap, map } from "rxjs/operators";
import { CourseListItem } from "../../../interfaces/course-list-item";

@Injectable()
export class CoursesEffects {
    constructor(private coursesService: CoursesService, private actions: Actions){}
    @Effect()
    loadCourses = this.actions.pipe(
        ofType(CoursesActionType.loadCourses),
        mergeMap((action: LoadCourses) => this.coursesService.getList(action.payload).pipe(
            map((courses: CourseListItem[]) => new FetchCourses(courses))
        ))
    )
}
