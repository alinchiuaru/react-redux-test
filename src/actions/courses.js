import axios from 'axios';

export const REQUEST_COURSES = 'REQUEST_COURSES';
export const RECEIVE_COURSES = 'RECEIVE_COURSES';

export const CREATE_COURSE_START = 'CREATE_COURSE_START';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_START';
export const CREATE_COURSE_ERROR= 'CREATE_COURSE_START';

export const REQUEST_COURSE = 'REQUEST_COURSE';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';

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

function requestCourse () {
    return {
        type: REQUEST_COURSE
    }
}

function receiveCourse (data) {
    return {
        type: RECEIVE_COURSE,
        data
    }
}

export function fetchCourse (courseId) {
    return dispatch => {
        dispatch(requestCourse());

        return axios.get(`/courses/${courseId}`)
            .then(response => {
                dispatch(receiveCourse(response.data.data));
            });
    }
}


export function fetchMyCourses() {
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

export function createCourse(data) {
    return dispatch => {
        dispatch(createCourseStart(data));

        return axios.post('/courses', data)
            .then( response => {
                dispatch(createCourseSuccess(response.data));
            })
    }
}