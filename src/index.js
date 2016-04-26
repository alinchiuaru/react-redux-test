import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import axios from 'axios';

import App from './components/app';
import rootReducer from './reducers/rootReducer';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.root-element'));
