import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../actions/login';


class Login extends Component {
    onSubmit(props) {
        this.props.loginUser(props).then(() => {
            console.log('after submit:', this.props.auth);
        });
    }

    render() {
        const { fields: { username, password }, handleSubmit } = this.props;

        return (
            <div class="row login-form">
                <div class="panel panel-default col-md-6 col-md-offset-3">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">
                        <div class="col-md-8 col-md-offset-2">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} class="form-horizontal">
                                <div class="form-group label-floating">
                                    <label for="inputEmail" class="control-label">Username</label>
                                    <input type="text" class="form-control" id="inputEmail"{...username}/>
                                </div>

                                <div class="form-group label-floating">
                                    <label for="inputPassword" class="control-label">Password</label>
                                    <input type="text" class="form-control" id="inputPassword"{...password}/>
                                </div>

                                <div class="form-group text-center">
                                    <button type="submit" class="btn btn-raised btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//@todo: Validate function
//@todo: Add errors after submit
//@todo: Show a loading gif when submiting
//@todo: On success change state, see how can it be done the best

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default reduxForm({
    form: 'LoginForm',
    fields: ['username', 'password']
}, mapStateToProps, { loginUser })(Login);