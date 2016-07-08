import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import axios from 'axios'

import App from './components/app';
import Login from './containers/Login';
import Dashboard from './components/Dashboard';

import CoursesCreate from './containers/Courses/CoursesCreate';
import CourseManage from './containers/Courses/CourseManage';
import CourseStudy from './containers/Courses/CourseStudy';

import ChapterCreate from './containers/Chapters/ChapterCreate';

import QuizPractice from './containers/Quizzes/QuizPractice';
import QuizManage from './containers/Quizzes/QuizManage';
import QuizFinish from './containers/Quizzes/QuizFinish';

import QuestionCreate from './containers/Questions/QuestionCreate';

function requireAuth(nextState, replace) {
    if (!localStorage.getItem('user_token')) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

function requireAdmin(nextState, replace) {
    if (localStorage.getItem('user_role') != 1) {
        replace({
            pathname: '/dashboard',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={requireAuth}>
            <Route path="/dashboard" component={Dashboard} />

            <Route path="/courses">
                <Route path="/courses/:courseId/manage" component={CourseManage} onEnter={requireAdmin}/>
                <Route path="/courses/:courseId/chapter" component={ChapterCreate} onEnter={requireAdmin}/>
                <Route path="/create/course" component={CoursesCreate} onEnter={requireAdmin}/>

                <Route path="/courses/:courseId/study" component={CourseStudy}/>
            </Route>

            <Route path="/quizzes">
                <Route path='/quiz/:quizId/question' component={QuestionCreate} onEnter={requireAdmin}/>
                <Route path="/quiz/:quizId/manage" component={QuizManage} onEnter={requireAdmin}/>

                <Route path="/quiz/:quizId/practice" component={QuizPractice} />
                <Route path="/quiz/:quizId/finish" component={QuizFinish}/>
            </Route>

            <Route path="/chapters">
                <Route path="/courses/:courseId/chapter" component={ChapterCreate} onEnter={requireAdmin}/>
            </Route>

        </Route>

        <Route path="/login" component={Login} />
    </Router>
);
