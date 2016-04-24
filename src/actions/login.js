import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


const ROOT_URL = 'http://localhost:8077';

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(data) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: data.token
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
  }
}


export function loginUser(creds) {
    return function(dispatch) {
        dispatch(requestLogin(creds));

        return axios.post(`${ROOT_URL}/auth`, creds)
            .then((response) => {
                if ( !response.data.succcess ) {
                    dispatch( loginError(response.data.message) );
                } else {
                    localStorage.setItem('user_token', response.data.token);

                    dispatch(receiveLogin(response.data));
                }
            })
            .catch(err => console.log('Login error:', err));
    }
}