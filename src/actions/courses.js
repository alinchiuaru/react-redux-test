import axios from 'axios';

export const REQUEST_COURSES = 'REQUEST_COURSES';
export const RECEIVE_COURSES = 'RECEIVE_COURSES';

export const CREATE_COURSE_START = 'CREATE_COURSE_START';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_START';
export const CREATE_COURSE_ERROR= 'CREATE_COURSE_START';


const AUTH_TOKEN = localStorage.getItem('user_token');
axios.defaults.baseURL = 'http://localhost:8077/api';
axios.defaults.headers.common['token'] = AUTH_TOKEN;

function requestCourses () {
    return {
        type: REQUEST_COURSES,
        isFetching: true,
    }
}

function recieveCourses (courses) {
    return {
        type: RECEIVE_COURSES,
        isFetching: false,
        courses
    }
}

function createCourseStart () {
    return {
        type: CREATE_COURSE_START,
        isFetching: true
    }
}

function createCourseSuccess (course) {
    return {
        type: CREATE_COURSE_SUCCESS,
        course
    }
}


export function fetchCourses() {
    return dispatch => {
        dispatch(requestCourses());

        return axios.get('/courses')
            .then((response) => {
                if ( !response.data ) {
                   console.log('Failed to fetch courses');
                } else {
                    dispatch(recieveCourses(response.data.data));
                }
            })
            .catch(err => console.log('Courses error:', err));
    }
}

export function fetchMyCourses() {
    return dispatch => {
        dispatch(requestCourses());

        return axios.get('/courses/me')
            .then((response) => {
                if ( !response.data ) {
                   console.log('Failed to fetch courses');
                } else {
                    dispatch(recieveCourses(response.data.data));
                }
            })
            .catch(err => console.log('Courses error:', err));
    }
}

export function createCourse(data) {
    return dispatch => {
        dispatch(createCourseStart(data));

        return axios.post('/courses', data)
            .then( response => {
                dispatch(createCourseSuccess(response.data));
            })
    }
}