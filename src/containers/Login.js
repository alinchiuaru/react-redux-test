import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../actions/login';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import * as Colors from 'material-ui/styles/colors';

console.log(Colors);

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.loginUser(props).then(() => {
            if ( this.props.auth.isAuthenticated ) {
                this.context.router.push('/courses');
            }
        });
    }

    render() {
        const { fields: { username, password }, handleSubmit } = this.props;

        return (
          <MuiThemeProvider muiTheme={getMuiTheme()}>
              <div class="row center-xs middle-xs col" style={{ 'minHeight': '550px', 'flexDirection': 'column' }}>
                  <Paper class="col-md-3 col-xs-6" style={{ 'backgroundColor': Colors.cyan500, 'minHeight': '100px', 'width': '100%'}} zDepth={1}>
                      <p class="text-headline" style={{ 'color': Colors.grey50, 'lineHeight': '100px' }}>Welcome!</p>
                  </Paper>

                  <Paper class="col-md-3 col-xs-6" style={{ 'backgroundColor': Colors.grey50, 'width': '100%', 'padding': '50px'}} zDepth={1}>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div>
                            <TextField
                              hintText="Username"
                              floatingLabelText="Username"
                              type="text"
                              fullWidth={true}
                              {...username}
                              required
                            />
                        </div>

                        <div>
                            <TextField
                              hintText="Password Field"
                              floatingLabelText="Password"
                              type="password"
                              fullWidth={true}
                              {...password}
                              required
                            />
                        </div>

                        <div style={{'marginTop': '50px'}}>
                            <RaisedButton type="submit" secondary={true} label="Submit"/>
                        </div>

                        <p style={{ 'color': Colors.pinkA200 }}>{ this.props.auth.errorMessage }</p>
                      </form>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

//@todo: Validate function
//@todo: Add errors after submit
//@todo: Show a loading gif when submiting

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default reduxForm({
    form: 'LoginForm',
    fields: ['username', 'password']
}, mapStateToProps, { loginUser })(Login);