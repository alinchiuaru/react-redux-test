import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import App from './components/app';
import Login from './containers/Login';
import Dashboard from './components/Dashboard';

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
                <Route path="/courses/:id" />
            </Route>
        </Route>

        <Route path="/login" component={Login} />
    </Router>
);
