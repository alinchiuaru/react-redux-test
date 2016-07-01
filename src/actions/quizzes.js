import axios from 'axios';

export const REQUEST_QUIZ = 'REQUEST_QUIZ';
export const RECEIVE_QUIZ = 'RECEIVE_QUIZ';

export const SELECT_QUESTION = 'SELECT_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const SKIP_QUESTION = 'SKIP_QUESTION';


export function selectQuestion (index) {
    return {
        type: SELECT_QUESTION,
        index
    }
}

export function answerQuestion (index) {
    return {
        type: ANSWER_QUESTION,
        index
    }
}

export function skipQuestion (index) {
    return {
        type: SKIP_QUESTION,
        index
    }
}

function requestQuiz() {
    return {
        type: REQUEST_QUIZ,
        isFetching: true,
    }
}

function receiveQuiz (data) {
    return {
        type: RECEIVE_QUIZ,
        isFetching: false,
        data
    }
}

export function fetchQuiz (quizId) {
    return dispatch => {
        dispatch(requestQuiz());

        return axios.get(`/quizzes/${quizId}`)
            .then(response => {
                dispatch(receiveQuiz(response.data));
            });
    }
}