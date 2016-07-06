import axios from 'axios';

export const SUBMIT_QUESTION = 'SUBMIT_QUESTION';
export const QUESTION_SUBMITED = 'QUESTION_SUBMITED';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER';
export const MARK_QUESTION_ANSWER = 'MARK_QUESTION_ANSWER';
export const UPDATE_QUESTION_TEXT = 'UPDATE_QUESTION_TEXT';
export const UPDATE_QUESTION_ANSWER_TEXT = 'UPDATE_QUESTION_ANSWER_TEXT';
export const UPDATE_QUESTION_SCORE = 'UPDATE_QUESTION_SCORE';


export function addAnswer() {
    return {
        type: ADD_QUESTION_ANSWER
    }
}

export function removeAnswer() {
    return {
        type: REMOVE_QUESTION_ANSWER
    }
}

export function markAnswer(index, isChecked) {
    return {
        type: MARK_QUESTION_ANSWER,
        index,
        isChecked
    }
}

export function updateAnswerText(index, value) {
    return {
        type: UPDATE_QUESTION_ANSWER_TEXT,
        index,
        value
    }
}

export function updateQuestionText(value) {
    return {
        type: UPDATE_QUESTION_TEXT,
        value
    };
}

export function updateQuestionScore(value) {
    return {
        type: UPDATE_QUESTION_SCORE,
        value
    }
}

export function questionSubmitted() {
    return {
        type: QUESTION_SUBMITED
    }
}

export function submitQuestion(data) {
    return dispatch => {
        return axios.post('/questions', data)
            .then((reponse) => {
                dispatch(questionSubmitted());
            });
    }
}