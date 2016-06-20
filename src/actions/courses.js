import axios from 'axios';

export const REQUEST_COURSES = 'REQUEST_COURSES';
export const RECEIVE_COURSES = 'RECEIVE_COURSES';

const ROOT_URL = 'http://localhost:8077';
const token = localStorage.getItem('user_token');

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


export function fetchCourses() {
    return dispatch => {
        dispatch(requestCourses());

        return axios.get('http://localhost:8077/api/courses', { headers: {'token': token}, })
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