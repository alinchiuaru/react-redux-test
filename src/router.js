import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import axios from 'axios'

import App from './components/app';
import Login from './containers/Login';
import Dashboard from './components/Dashboard';

import CoursesCreate from './containers/Courses/CoursesCreate';
import CourseManage from './containers/Courses/CourseManage';

import ChapterCreate from './containers/Chapters/ChapterCreate';

import QuizPractice from './containers/Quizzes/QuizPractice';

import QuestionCreate from './containers/Questions/QuestionCreate';

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
                <Route path="/courses/:courseId/manage" component={CourseManage} />
                <Route path="/courses/:courseId/chapter" component={ChapterCreate} />
                <Route path="/create/course" component={CoursesCreate} />
            </Route>

            <Route path="/quizzes">
                <Route path='/quiz/:quizId/question' component={QuestionCreate} />

                <Route path="/quiz/:quizId/start" />
                <Route path="/quiz/:quizId/practice" component={QuizPractice} />
                <Route path="/quiz/:quizId/finish" />
            </Route>

            <Route path="/chapters">
                <Route path="/courses/:courseId/chapter" component={ChapterCreate} />
            </Route>

        </Route>

        <Route path="/login" component={Login} />
    </Router>
);
