import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderBar from '../components/HeaderBar';
import CourseThumbnail from '../components/CourseThumbnail';
import { fetchCourses } from '../actions/courses';

import LinearProgress from 'material-ui/LinearProgress';

class Courses extends Component {
    componentWillMount() {
        this.props.fetchCourses();
    }

    renderCourseThumbnails() {
        if (!this.props.courses.courses ) {
            return;
        }

       return this.props.courses.courses.map(function(course) {
            return (
                <CourseThumbnail key={course.id} description={course.description} title={course.title} logo={course.logo} />
            );
        });
    }

    render() {
        console.log(this.props.courses);
        return (
            <div>
                <HeaderBar/>
                <div class="container-fluid">
                    <h2 class="text-display-2">My Courses</h2>
                    <div class="row">
                        {this.renderCourseThumbnails()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { courses: state.courses };
}

export default connect(mapStateToProps, { fetchCourses })(Courses);