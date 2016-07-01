import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './loginReducer';
import courses from './coursesReducer';
import quizzes from './quizzesReducer';
import quizPractice from './quizPracticeReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: auth,
    courses: courses,
    quizzes: quizzes,
    quizPractice: quizPractice,
});

export default rootReducer;
