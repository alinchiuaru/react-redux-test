import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyCourses } from '../actions/courses';

export default class CoursePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Course page!
            </div>
        );
    }
}