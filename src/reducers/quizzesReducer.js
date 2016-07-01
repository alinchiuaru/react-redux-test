import { REQUEST_QUIZ, RECEIVE_QUIZ } from '../actions/quizzes';

const intialState = { selectedQuiz: {}, quizzesList: [] };

export default function quizzes(state = intialState, action) {
    switch ( action.type ) {
        case RECEIVE_QUIZ:
            let newQuizzes = [...state.quizzesList, action.data.data]

            return {
                ...state,
                selectedQuiz: action.data.data,
                quizzesList: newQuizzes
            };
        default:
            return state;
    }
}