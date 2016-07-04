import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createCourse } from '../actions/courses';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const formHolderStyle = {
    margin: '100px 0px',
    textAlign: 'center'
};

const holderStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FAFAFA'
};

const previewStyle = {
    header: {
        height: '300px',
        backgroundImage: 'url("http://www.dogtownmedia.com/wp-content/uploads/material-design-android-app-developer.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
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
            <div class="container-fluid">
                <Paper zDepth={2} style={holderStyles}>
                    <Paper class="col-md-12" style={previewStyle.header} zDepth={0}>
                        <div>
                            <h1 class="text-display-1">{ title.value? title.value: 'Course title' }</h1>
                            <h1 class="text-headline">{ description.value? description.value: 'Course description' }</h1>
                        </div>
                    </Paper>

                    <div class="col-md-12 col-xs-12" style={formHolderStyle}>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div>
                                <TextField
                                  hintText="Title"
                                  type="text"
                                  fullWidth={true}
                                  {...title}
                                  required
                                />
                            </div>

                            <div>
                                <TextField
                                  hintText="Description"
                                  type="text"
                                  fullWidth={true}
                                  {...description}
                                  required
                                />
                            </div>

                             <div>
                                <TextField
                                  hintText="Logo Url"
                                  type="text"
                                  fullWidth={true}
                                  {...logo}
                                />
                            </div>

                            <div style={{ marginTop: '50px' }}>
                                <RaisedButton primary={true} type="submit" label="Submit"/>
                            </div>
                        </form>
                    </div>
                </Paper>
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