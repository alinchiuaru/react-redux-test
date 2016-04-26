import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../actions/login';

import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';


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
          <div style={ {marginTop: '30vh' } }>
            <div class="row center-xs text-headline">
              Welcome!
            </div>
            <div class="row center-xs">
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

                    <div>
                        <RaisedButton type="submit" secondary={true} label="Submit"/>
                    </div>
                  </form>
              </div>
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