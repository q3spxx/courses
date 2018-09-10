import { CoursesState } from "./courses-state";
import { Actions, CoursesActionType } from "../actions/courses.actions";

const initialState = {
    courses: []
}

export function coursesReducer(state: CoursesState = initialState, action: Actions): CoursesState {
    switch(action.type) {
        case CoursesActionType.fetchCourses:
            return {
                ...state,
                courses: action.payload
            };
        default:
            return state;
    }
}