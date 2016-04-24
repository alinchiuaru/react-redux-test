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
            <div class="panel panel-primary">
                <p>state: {this.props.auth.isFetching ? 'LOADING....' : ''}</p>
                <div class="panel-heading">
                    <h3 class="panel-title">Login</h3>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} class="form-horizontal">
                  <fieldset>
                    <div class="form-group">
                      <label for="inputEmail" class="col-lg-2 control-label">Username</label>
                      <div class="col-lg-10">
                        <input type="text" class="form-control" id="inputEmail" placeholder="Username" {...username}/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputPassword" class="col-lg-2 control-label">Password</label>
                      <div class="col-lg-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" {...password}/>
                      </div>
                    </div>
                  </fieldset>
                  <div class="form-group">
                      <div class="col-lg-10 col-lg-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </div>
                </form>
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