import React from 'react';
import { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
    render() {
        console.log(this.props);
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
