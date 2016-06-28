import { REQUEST_COURSES, RECEIVE_COURSES, CREATE_COURSE_START, CREATE_COURSE_SUCCESS } from '../actions/courses';

const initialState = { courses: [] };

export default function courses(state = initialState, action) {
    switch ( action.type ) {
        case REQUEST_COURSES:
            return { ...state, isFetching: true };
        case RECEIVE_COURSES:
            return {...state, isFetching: false, courses: action.courses};
        case CREATE_COURSE_SUCCESS:
            return {...state, isFetching: false, course: action.course}
        default:
            return state;
    }
}