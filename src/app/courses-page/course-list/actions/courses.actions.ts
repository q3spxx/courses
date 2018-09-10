import { Action } from "@ngrx/store";
import { CourseListItem } from "../../../interfaces/course-list-item";
import { CoursesParams } from "../../../interfaces/courses-params";

export enum CoursesActionType {
    loadCourses = '[Courses] load',
    fetchCourses = '[Courses] fetch'
}

export class FetchCourses implements Action {
    readonly type: CoursesActionType.fetchCourses;
    constructor(public payload: CourseListItem[]) {}
}

export class LoadCourses implements Action {
    readonly type: CoursesActionType.loadCourses;
    constructor(public payload: CoursesParams) {}
}

export type Actions = FetchCourses | LoadCourses;