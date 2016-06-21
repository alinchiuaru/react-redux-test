import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';

const sideNavStyle = {
    textAlign  : 'center',
    padding: 0,
};

const topStyle = {
    height          : '15%',
    width           : '100%',
    backgroundColor : '#FAFAFA',
    borderRadius    : 0,
    backgroundImage : 'url("http://www.dogtownmedia.com/wp-content/uploads/material-design-android-app-developer.jpg")',
    backgroundSize  : '125% 100%',
    borderRight     : '1px solid #E0E0E0'
};

const bottomStyle = {
    height          : '100%',
    width           : '100%',
    backgroundColor : "#FAFAFA",
    borderRadius    : 0,
    position        : 'relative',
    display         : 'flex',
    flexDirection   : 'column',
    borderRight     : '1px solid #E0E0E0'
};

const circleStyle = {
    width           : '150px',
    height          : '150px' ,
    backgroundColor : '#FAFAFA',
    position        : 'absolute',
    bottom          : 'calc(100% - 75px)',
    left            : 'calc(50% - 80px)',
    backgroundImage : 'url("http://www.omgubuntu.co.uk/wp-content/uploads/2014/08/can.jpg")',
    backgroundSize  : 'cover',
    border          : '5px solid #FAFAFA',
};


const detailsStyle = {
    'marginTop' : '30%',
    'textAlign' : 'center',
    'color'     : '#9E9E9E'
};

const listStyle = {
    'width'     : '100%',
    'marginTop' : '5%',
    'textAlign' : 'left'
};

const CourseThumbnail = () => (
    <div class="side-nav col-md-2 col-xs-3" style={sideNavStyle}>
        <Paper style={topStyle} zDepth={0}>
        </Paper>
        <Paper style={bottomStyle} zDepth={0}>
            <Paper style={circleStyle} circle={true} zDepth={0}></Paper>
            <div style={detailsStyle}>
                <h2 class="text-headline">Alin Chiuaru</h2>
                <h4 class="text-subhead">alin.chiuaru@gmail.com</h4>
            </div>

            <List style={listStyle}>
              <ListItem primaryText="Dashboard" leftIcon={<ContentInbox />} />
              <ListItem primaryText="Students" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Courses" leftIcon={<ContentSend />} />
              <ListItem primaryText="Stats" leftIcon={<ContentDrafts />} />
              <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            </List>
        </Paper>
    </div>
);


export default CourseThumbnail;