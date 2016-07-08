import { RECEIVE_CHAPTER } from '../actions/chapters';

const initialState = { chapter: {} };

export default function courses(state = initialState, action) {
    switch ( action.type ) {
       case RECEIVE_CHAPTER:
            return {
                ...state,
                chapter: action.data
            }
        default:
            return state;
    }
}