import React from 'react';
import { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideNav from '../components/SideNav';


export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div class="app-container">
                    <SideNav/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
