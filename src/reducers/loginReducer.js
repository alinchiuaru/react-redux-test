import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login';

const initialState = { isFetching: false, isAuthenticated: localStorage.getItem('user_token') ? true : false };

export default function auth(state = initialState, action) {
    switch ( action.type ) {
        case LOGIN_REQUEST:
            return { ...state, isFetching: true, isAuthenticated : false, user: action.creds.username };
        case LOGIN_SUCCESS:
            return {...state, isFetching: false, isAuthenticated: true, errorMessage: ''};
        case LOGIN_FAILURE:
            return {...state, isFetching: false, isAuthenticated: false, errorMessage: action.message};
        default:
            return state;
    }
}