import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderBar from '../components/HeaderBar';
import CourseThumbnail from '../components/CourseThumbnail';
import { fetchCourses } from '../actions/courses';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
};

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
                <CourseThumbnail key={course.id} id={course.id} description={course.description} title={course.title} logo={course.logo} />
            );
        });
    }

    render() {
        return (
            <div class="container-fluid">
                <div style={titleStyle}>
                    <ContentInbox/>
                    <h2 class="text-headtitle">My Courses</h2>
                </div>

                <div class="row">
                    {this.renderCourseThumbnails()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { courses: state.courses };
}

export default connect(mapStateToProps, { fetchCourses })(Courses);