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
    width: '24%',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto'
};

const topStyle = {
    height          : '25%',
    width           : '100%',
    backgroundColor : '#FAFAFA',
    backgroundImage : 'url("https://material-design.storage.googleapis.com/publish/material_v_8/material_ext_publish/0Bx4BSt6jniD7bng4eEdEaXBiMXc/style_imagery_bestpractices_focus1.png")',
    backgroundSize  : '100%',
    display         : 'flex',
    flexDirection   : 'column',
    alignItems      : 'center',
    justifyContent  : 'center'
};

const bottomStyle = {
    height          : '100%',
    width           : '100%',
    backgroundColor : "#FAFAFA",
    borderRadius    : 0,
    position        : 'relative',
    display         : 'flex',
    flexDirection   : 'column',
};

const circleStyle = {
    width           : '100px',
    height          : '100px' ,
    backgroundColor : '#FAFAFA',
    backgroundImage : 'url("http://nmelp3rtl8l2tnuwd2blzv3ecu.wpengine.netdna-cdn.com/wp-content/themes/nationswell/img/placeholder.jpg")',
    backgroundSize  : 'cover',
};


const detailsStyle = {
    'color'     : '#ffffff'
};

const listStyle = {
    'width'     : '100%',
    'marginTop' : '5%',
};

const SideNav = (props) => (
    <Paper class="side-nav" style={sideNavStyle} zDepth={1}>
        <Paper style={topStyle} zDepth={1}>
            <Paper style={circleStyle} circle={true} zDepth={0}></Paper>
            <div style={detailsStyle}>
                <h2 class="text-headline">{props.user.username}</h2>
                <h4 class="text-subhead">{props.user.email}</h4>
            </div>
        </Paper>

        <Paper style={bottomStyle} zDepth={0}>
            <List style={listStyle}>
              <Link to="/dashboard" activeClassName="side-nav-active"> <ListItem primaryText="Dashboard" leftIcon={<ContentInbox />} /> </Link>
              <Link to="/students" activeClassName="side-nav-active"> <ListItem primaryText="Students" leftIcon={<ActionGrade />} /> </Link>
              <Link to="/create/course" activeClassName="side-nav-active"> <ListItem primaryText="Courses" leftIcon={<ContentSend />} /> </Link>
            </List>
        </Paper>
    </Paper>
);


export default SideNav;