import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../actions/login';

import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import Colors from 'material-ui/lib/styles/colors';

console.log(Colors);

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.loginUser(props).then(() => {
            console.log('after submit:', this.props.auth);

            if ( this.props.auth.isAuthenticated ) {
                this.context.router.push('/users');
            }
        });
    }

    render() {
        const { fields: { username, password }, handleSubmit } = this.props;

        return (
          <div class="row center-xs middle-xs col" style={{ 'minHeight': '550px' }}>
              <Paper class="col-md-3" style={{ 'backgroundColor': Colors.cyan500, 'minHeight': '100px', 'width': '100%'}} zDepth={1}>
                  <p class="text-headline" style={{ 'color': Colors.grey50 }}>Welcome!</p>
              </Paper>

              <Paper class="col-md-3" style={{ 'backgroundColor': Colors.grey50, 'width': '100%', 'padding': '50px'}} zDepth={1}>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div>
                        <TextField
                          hintText="Username"
                          floatingLabelText="Username"
                          type="text"
                          {...username}
                          required
                        />
                    </div>

                    <div>
                        <TextField
                          hintText="Password Field"
                          floatingLabelText="Password"
                          type="password"
                          {...password}
                          required
                        />
                    </div>

                    <div style={{'margin-top': '50px'}}>
                        <RaisedButton type="submit" secondary={true} label="Submit"/>
                    </div>
                  </form>
                </Paper>
            </div>
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