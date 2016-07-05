import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseThumbnail from '../../components/CourseThumbnail';
import { fetchMyCourses } from '../../actions/courses';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
};

class CoursesList extends Component {
    componentWillMount() {
        this.props.fetchMyCourses();
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
            <div class="row">
                {this.renderCourseThumbnails()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { courses: state.courses };
}

export default connect(mapStateToProps, { fetchMyCourses })(CoursesList);