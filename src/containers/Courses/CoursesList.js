import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseThumbnail from '../../components/CourseThumbnail';
import { fetchMyCourses } from '../../actions/courses';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

import Settings from 'material-ui/svg-icons/action/settings';
import Explore from 'material-ui/svg-icons/action/Explore';

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


       return this.props.courses.courses.map( (course) => {
            const link = this.props.userMe.admin ? `courses/${course.id}/manage` : `courses/${course.id}/study`;
            const icon = this.props.userMe.admin ? <Settings /> : <Explore />;

            return (
                <CourseThumbnail
                    key={course.id}
                    id={course.id}
                    description={course.description}
                    title={course.title}
                    logo={course.logo}
                    link={link}
                    icon={icon}
                />
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
    return { courses: state.courses, userMe: state.users.me };
}

export default connect(mapStateToProps, { fetchMyCourses })(CoursesList);