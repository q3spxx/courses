import { CoursesState } from "./courses-state";
import { Actions } from "../actions/courses.actions";

const initialState = {
    courses: []
}

export function coursesReducer(state: CoursesState = initialState, action: Actions): CoursesState {
    switch(action.type) {
        case 'FETCH_COURSES':
            return Object.assign(state, { courses: action.payload });
        default:
            return state;
    }
}