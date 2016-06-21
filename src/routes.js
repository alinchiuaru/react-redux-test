//@todo: Change name to Router
import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import App from './components/app';
import Login from './containers/Login';
import Courses from './containers/Courses';

function requireAuth(nextState, replace) {
    if (!localStorage.getItem('user_token')) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/courses" component={Courses} onEnter={requireAuth}/>
            <Route path="/courses/:id" onEnter={requireAuth}/>
        </Route>
        <Route path="/login" component={Login} />
    </Router>
);
