import { REQUEST_QUIZ, RECEIVE_QUIZ, REQUEST_QUIZ_PROGRESS, RECEIVE_QUIZ_PROGRESS, SELECT_QUESTION, ANSWER_QUESTION, SKIP_QUESTION, ADD_ANSWER } from '../actions/quizzes';

const intialState = { selectedQuestion: {}, questionsList: [], finished: false, quiz: {} };

export default function quizPractice(state = intialState, action) {
    switch ( action.type ) {
        case REQUEST_QUIZ:
        case REQUEST_QUIZ_PROGRESS:
            return {
                ...state,
                isFetching: true
            };

        case RECEIVE_QUIZ:
            return {
                ...state,
                quiz: action.data.data,
                isFetching: false
            };

        case RECEIVE_QUIZ_PROGRESS:
            return {
                ...state,
                questionsList: action.data,
                isFetching: false,
                finished: action.data.length === 0
            };

        case SELECT_QUESTION:
            let selectedQuestion = Object.assign({}, state.questionsList[action.index]);

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
                selectedQuestion: newQuestionsList[0],
                finished: newQuestionsList.length === 0
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

        case ADD_ANSWER:
            let answerIndex = state.selectedQuestion.questionData.findIndex( element => element.answer == action.answer),
                newAnswers = [];

            if ( answerIndex > -1 ) {  //answer already exists
                newAnswers = [
                    ...state.selectedQuestion.questionData.slice(0, answerIndex),
                    {...state.selectedQuestion.questionData[answerIndex], correct: action.correct},
                    ...state.selectedQuestion.questionData.slice(answerIndex + 1)
                ];
           }

           return {
                ...state,
                selectedQuestion: {...state.selectedQuestion, questionData: newAnswers}
           }

        default:
            return state;
    }
}