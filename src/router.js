import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import axios from 'axios'

import App from './components/app';
import Login from './containers/Login';
import Dashboard from './components/Dashboard';
import CreateCourses from './containers/CoursesCreate';

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
        <Route path="/" component={App} onEnter={requireAuth}>
            <Route path="/dashboard" component={Dashboard} />

            <Route path="/courses">
            </Route>

            <Route path="/courses/create" component={CreateCourses} />
        </Route>

        <Route path="/login" component={Login} />
    </Router>
);
