import { TOGGLE_SIDENAV } from '../actions/sidenav';

const initialState = { open: true };

export default function sidenav(state = initialState, action) {
    switch ( action.type ) {
        case TOGGLE_SIDENAV:
            const isOpen = state.open;

            return {
                ...state,
                open: !isOpen
            };

        default:
            return state;
    }
}