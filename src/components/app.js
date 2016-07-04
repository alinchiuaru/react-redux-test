import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideNav from '../components/SideNav';
import { fetchMyDetails } from '../actions/users';


class App extends Component {
    componentDidMount() {
        this.props.fetchMyDetails();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div class="app-container">
                    <SideNav user={this.props.users.me}/>
                    <div style={{width: '100%'}}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchMyDetails })(App);