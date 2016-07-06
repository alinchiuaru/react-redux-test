import {
    ADD_QUESTION_ANSWER,
    REMOVE_QUESTION_ANSWER,
    MARK_QUESTION_ANSWER,
    UPDATE_QUESTION_TEXT,
    UPDATE_QUESTION_ANSWER_TEXT,
    UPDATE_QUESTION_SCORE,
} from '../actions/questions';

//This is for only ONE question
const intialState = {
    questionText: '',
    score: 1,
    answers: [
        {
            answer: '',
            correct: true,
            defaultAnswer: true,
        },
        {
            answer: '',
            correct: false,
            defaultAnswer: true,
        }
    ]
};

function getEmptyAnswer() {
    return {
        answer: '',
        correct: false,
    };
}

export default function questionReducer(state = intialState, action) {
    switch (action.type) {
        case ADD_QUESTION_ANSWER:
            return {
                ...state,
                answers: [...state.answers, getEmptyAnswer()]
            };

        case REMOVE_QUESTION_ANSWER:
            let answers = [
                ...state.answers.slice(0, (state.answers.length - 1)),
            ];

            return {
                ...state,
                answers
            };

        case MARK_QUESTION_ANSWER:
            var currentAnswer = state.answers[action.index];
            var newAnswer = {...currentAnswer, correct: action.isChecked};

            var newAnswers = [
                ...state.answers.slice(0, action.index),
                newAnswer,
                ...state.answers.slice(action.index + 1),
            ];

            return {
                ...state,
                answers: newAnswers
            };

        case UPDATE_QUESTION_TEXT:
            return {
                ...state,
                questionText: action.value
            };

        case UPDATE_QUESTION_ANSWER_TEXT:
            var currentAnswer = state.answers[action.index];
            var newAnswer = {...currentAnswer, answer: action.value};

            var newAnswers = [
                ...state.answers.slice(0, action.index),
                newAnswer,
                ...state.answers.slice(action.index + 1),
            ];

            return {
                ...state,
                answers: newAnswers
            };

        case UPDATE_QUESTION_SCORE:
            return {
                ...state,
                score: action.value
            };

        default:
            return state;
    }
}