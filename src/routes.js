import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Login from './components/Login';

export default (
    <Route path="/" component={App}>
        <Route path="/login" component={Login}/>
    </Route>
);