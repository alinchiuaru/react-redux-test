import axios from 'axios';

export const REQUEST_QUIZ = 'REQUEST_QUIZ';
export const RECEIVE_QUIZ = 'RECEIVE_QUIZ';

export const REQUEST_QUIZ_PROGRESS = 'REQUEST_QUIZ_PROGRESS';
export const RECEIVE_QUIZ_PROGRESS = 'RECEIVE_QUIZ_PROGRESS';

export const SELECT_QUESTION = 'SELECT_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const SKIP_QUESTION = 'SKIP_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export const CREATE_QUIZ = 'CREATE_QUIZ';

export const REQUEST_QUIZ_SCORE = 'REQUEST_QUIZ_SCORE';
export const RECEIVE_QUIZ_SCORE = 'RECEIVE_QUIZ_SCORE';


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

function requestQuizProgress (quizId) {
    return {
        type: REQUEST_QUIZ_PROGRESS,
        quizId
    }
}

function receiveQuizProgress (data) {
    return {
        type: RECEIVE_QUIZ_PROGRESS,
        data
    }
}

function addAnswer (answer, correct) {
    return {
        type: ADD_ANSWER,
        answer,
        correct
    }
}

function requestQuizScore() {
    return {
        type: REQUEST_QUIZ_SCORE,
        isFetching: true
    }
}

function receiveQuizScore(data) {
    return {
        type: RECEIVE_QUIZ_SCORE,
        data
    }
}

export function fetchQuizScore (quizId) {
    return dispatch => {
        dispatch(requestQuizScore());

        return axios.get(`/quizzes/${quizId}/score`)
            .then( response => {
                dispatch(receiveQuizScore(response.data.data));
            });
    }
}

export function markAnswer (answer, correct) {
    return dispatch => {
        dispatch(addAnswer(answer, correct));
    }
}

export function fetchQuizProgress (quizId) {
    return dispatch => {
        dispatch(requestQuizProgress(quizId));

        return axios.get(`/quizzes/${quizId}/progress`)
            .then(response => {
                dispatch(receiveQuizProgress(response.data.data));
            });
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

export function sendQuestionAnswer (question) {
    return dispatch => {
        return axios.post(`/practice/${question.id}`, { answers: question.answers })
            .then(() => {
                dispatch(answerQuestion(0)); //0 for now, probabily remove it
            });
    }
}

function addQuiz() {
    return {
        type: CREATE_QUIZ
    }
}

export function createQuiz(data) {
    return dispatch => {
        return axios.post('/quizzes', data)
            .then( response => {
                dispatch(addQuiz());
            })
    }
}