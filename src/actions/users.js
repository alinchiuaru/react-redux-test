import axios from 'axios';
const AUTH_TOKEN = localStorage.getItem('user_token');
axios.defaults.baseURL = 'http://localhost:8077/api';
axios.defaults.headers.common['token'] = AUTH_TOKEN;

export const REQUEST_ME = 'REQUEST_ME';
export const RECEIVE_ME = 'RECEIVE_ME';

function requestMe() {
    return { type: REQUEST_ME }
}

function receiveMe(data) {
    return {
        type: RECEIVE_ME,
        data
    }
}

export function fetchMyDetails() {
    return dispatch => {
        dispatch(requestMe());

        axios.get('user/me')
            .then( response => {
                dispatch(receiveMe(response.data.data));
            });
    }
}