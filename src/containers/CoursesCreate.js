import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createCourse } from '../actions/courses';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
   margin: '20px',
};

const holderStyles = {
    alignSelf: 'center',
    margin: '0 auto',
    textAlign: 'center'
};

class CoursesCreate extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(data) {
        this.props.createCourse(data)
            .then(() => {
                if ( this.props.courses.course.data ) {
                    this.context.router.push('/dashboard');
                }
            });
    }

    render() {
        const { fields: { title, description, logo }, handleSubmit } = this.props;

        return (
            <div class="col-md-6 col-xs-12" style={holderStyles}>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div style={styles}>
                        <TextField
                          hintText="Title"
                          type="text"
                          fullWidth={true}
                          {...title}
                          required
                        />
                    </div>

                    <div style={styles}>
                        <TextField
                          hintText="Description"
                          type="text"
                          fullWidth={true}
                          {...description}
                          required
                        />
                    </div>

                     <div style={styles}>
                        <TextField
                          hintText="Logo Url"
                          type="text"
                          fullWidth={true}
                          {...logo}
                        />
                    </div>

                    <div>
                        <RaisedButton primary={true} type="submit" label="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { courses: state.courses }
}

export default reduxForm({
    form: 'CreateCourseForm',
    fields: ['title', 'description', 'logo']
}, mapStateToProps, { createCourse })(CoursesCreate);