import { REQUEST_COURSES, RECEIVE_COURSES } from '../actions/courses';

const initialState = { courses: [] };

export default function courses(state = [], action) {
    switch ( action.type ) {
        case REQUEST_COURSES:
            return { ...state, isFetching: true };
        case RECEIVE_COURSES:
            return {...state, isFetching: false, courses: action.courses};
        default:
            return state;
    }
}