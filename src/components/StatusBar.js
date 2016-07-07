import React from 'react';
import Paper from 'material-ui/paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';

import { toggleSidenav } from '../actions/sidenav';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const StatusBar = (props) => (
    <AppBar
        title="eLearning"
        iconElementLeft={<IconButton onClick={props.toggleSidenav}><AppsIcon /></IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Dashboard"  onClick={ () => browserHistory.push('/dashboard') }/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out" onClick={() => { localStorage.clear(); browserHistory.push('/login')} } />
          </IconMenu>
        }
    />
);

export default connect(null, {toggleSidenav})(StatusBar);