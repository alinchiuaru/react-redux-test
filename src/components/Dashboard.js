import React from 'react';
import CoursesList from '../containers/CoursesList';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import TinyMCE from 'react-tinymce';
import Divider from 'material-ui/Divider';

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
};

const Dashboard = () => (
    <div class="container-fluid">
        <div style={titleStyle}>
            <h2 class="text-headtitle">Courses</h2>
        </div>
        <Divider inset={false} />
        <CoursesList />
    </div>
);

export default Dashboard;