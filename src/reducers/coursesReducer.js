import { REQUEST_COURSES, RECEIVE_COURSES, REQUEST_COURSE, RECEIVE_COURSE, CREATE_COURSE_START, CREATE_COURSE_SUCCESS } from '../actions/courses';

const initialState = { courses: [], selectedCourse: {} };

export default function courses(state = initialState, action) {
    switch ( action.type ) {
        case REQUEST_COURSES:
        case REQUEST_COURSE:
            return { ...state, isFetching: true };
        case RECEIVE_COURSES:
            return {...state, isFetching: false, courses: action.courses};
        case RECEIVE_COURSE:
            return {...state, isFetching: false, selectedCourse: action.data};
        case CREATE_COURSE_SUCCESS:
            return {...state, isFetching: false, course: action.course}
        default:
            return state;
    }
}