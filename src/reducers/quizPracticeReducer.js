import { RECEIVE_QUIZ, SELECT_QUESTION, ANSWER_QUESTION, SKIP_QUESTION } from '../actions/quizzes';

const intialState = { selectedQuestion: {}, questionsList: [] };

export default function quizPractice(state = intialState, action) {
    switch ( action.type ) {
        case RECEIVE_QUIZ:
            return {
                ...state,
                questionsList: action.data.data.questions
            };

        case SELECT_QUESTION:
            let selectedQuestion = state.questionsList[action.index];

            return {
                ...state,
                selectedQuestion
            };

        case ANSWER_QUESTION:
            var questionIndex = action.index;

            var newQuestionsList = [
                ...state.questionsList.slice(0, questionIndex),
                ...state.questionsList.slice(questionIndex + 1),
            ];

            return {
                ...state,
                questionsList: newQuestionsList,
                selectedQuestion: newQuestionsList[0]
            };

        case SKIP_QUESTION:
            var questionIndex = action.index,
                question = state.questionsList[questionIndex];


             var newQuestionsList = [
                ...state.questionsList.slice(0, questionIndex),
                ...state.questionsList.slice(questionIndex + 1),
                question
            ];

            return {
                ...state,
                questionsList: newQuestionsList,
                selectedQuestion: newQuestionsList[0]
            };

        default:
            return state;
    }
}