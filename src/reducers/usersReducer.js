import { REQUEST_ME, RECEIVE_ME } from '../actions/users';

const initialState = { users: [], me: {} };

export default function users(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ME:
            return {...state, isFetching: false};
        case RECEIVE_ME:
            return {...state, me: action.data, isFetching: false};
        default:
            return state;
    }
}