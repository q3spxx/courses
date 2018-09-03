import { Action } from "@ngrx/store";
import { CourseListItem } from "../interfaces/course-list-item";

export class SetCourses implements Action {
    readonly type: 'FETCH_COURSES';
    constructor(public payload: CourseListItem[]) {}
}

export class LoadCourses implements Action {
    readonly type: 'LOAD_COURSES';
}

export type Actions = SetCourses;