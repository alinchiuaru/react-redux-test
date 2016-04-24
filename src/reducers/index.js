import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './loginReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: auth
});

export default rootReducer;
