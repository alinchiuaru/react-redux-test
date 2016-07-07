import React from 'react';
import CoursesList from '../containers/Courses/CoursesList';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
import ActiveTabs from './ActiveTabs';

import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Read from 'material-ui/svg-icons/action/chrome-reader-mode';
import Check from 'material-ui/svg-icons/action/check-circle';

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
};


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeModal: null,
            activeTab: 'courses',
            tabs: [
                {
                    value: 'courses',
                    icon: <Read/>
                },
                {
                    value: 'students',
                    icon: <MapsPersonPin/>
                },
            ],
        };
    }

    handleTabChange = (value) => {
        this.setState({ activeTab: value });
    }

    render() {
        return (
            <div>
                <ActiveTabs value={this.state.activeTab} onChange={this.handleTabChange} tabs={this.state.tabs}/>
                <div class="container-fluid">
                    <div id="courses" class={this.state.activeTab !== 'courses' ? 'hidden' : ''}>
                        <h3 class="text-headline">Those are all your courses...</h3>
                        <CoursesList />
                    </div>
                </div>
            </div>
        );
    }
}