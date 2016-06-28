import React from 'react';
import CoursesList from '../containers/CoursesList';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import TinyMCE from '../components/TinyMCEComponent';

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