import React from 'react';
import { Link } from 'react-router';
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
    height          : '20%',
    width           : '100%',
    backgroundColor : '#FAFAFA',
    borderRadius    : 0,
    backgroundImage : 'url("https://cdn-images-1.medium.com/max/1400/1*278tqw9zNPe2WCAz29Wzdw.jpeg")',
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
    'textAlign' : 'left',
};

const SideNav = () => (
    <div class="side-nav col-md-2 col-xs-3" style={sideNavStyle}>
        <Paper style={topStyle} zDepth={0}>
        </Paper>
        <Paper style={bottomStyle} zDepth={0}>
            <Paper style={circleStyle} circle={true} zDepth={0}></Paper>
            <div style={detailsStyle}>
                <h2 class="text-headline">Firstname Lastname</h2>
                <h4 class="text-subhead">firstname.lastname@email.com</h4>
            </div>

            <List style={listStyle}>
              <Link to="/dashboard" activeClassName="side-nav-active"> <ListItem primaryText="Dashboard" leftIcon={<ContentInbox />} /> </Link>
              <Link to="/students" activeClassName="side-nav-active"> <ListItem primaryText="Students" leftIcon={<ActionGrade />} /> </Link>
              <Link to="/create/course" activeClassName="side-nav-active"> <ListItem primaryText="Courses" leftIcon={<ContentSend />} /> </Link>
            </List>
        </Paper>
    </div>
);


export default SideNav;