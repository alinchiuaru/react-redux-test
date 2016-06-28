import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './loginReducer';
import courses from './coursesReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: auth,
  courses: courses
});

export default rootReducer;
