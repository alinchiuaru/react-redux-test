import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './loginReducer';
import courses from './coursesReducer';
import quizzes from './quizzesReducer';
import quizPractice from './quizPracticeReducer';
import users from './usersReducer';
import question from './questionReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: auth,
    courses: courses,
    quizzes: quizzes,
    quizPractice: quizPractice,
    users: users,
    addQuestionForm: question
});

export default rootReducer;
