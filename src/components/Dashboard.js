import React from 'react';
import CoursesList from '../containers/Courses';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
};

const Dashboard = () => (
    <div class="container-fluid">
        <div style={titleStyle}>
            <ContentInbox/>
            <h2 class="text-headtitle">My Courses</h2>
        </div>

        <CoursesList />
    </div>
);

export default Dashboard;