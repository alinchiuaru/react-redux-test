import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createQuiz } from '../../actions/quizzes';
import { fetchCourse } from '../../actions/courses';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Dialog from 'material-ui/Dialog';

const formHolderStyle = {
    margin: '20px',
};


class QuizCreate extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(data) {
        const quiz = { name: data.name, description: data.description, courseId: this.props.courseId };

        this.props.createQuiz(quiz)
            .then(() => {
                this.props.fetchCourse(quiz.courseId).
                    then(() => { this.props.closeModal(); });
            });
    }

    render() {
        const { fields: { name, description }, handleSubmit } = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.closeModal}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={!this.props.valid}
                onTouchTap={handleSubmit(this.onSubmit.bind(this))}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Create a new quiz"
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                >
                    <div class="col-md-12" style={formHolderStyle}>
                        <form>
                            <div>
                                <TextField
                                  floatingLabelText="Title"
                                  hintText="Please enter a title"
                                  type="text"
                                  fullWidth={true}
                                  errorText={name.touched && name.error}
                                  {...name}
                                />
                            </div>

                            <div>
                                <TextField
                                  floatingLabelText="Description"
                                  hintText="Please enter a description"
                                  type="text"
                                  fullWidth={true}
                                  {...description}
                                  errorText={description.touched && description.error}
                                />
                            </div>
                        </form>
                    </div>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { quizzes: state.quizzes }
}

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Title is a required field';
    }
    if (!values.description) {
        errors.description = 'Description is a required field';
    }

    return errors;
}

export default reduxForm({
    form: 'CreateQuizForm',
    fields: ['name', 'description'],
    validate
}, mapStateToProps, { createQuiz, fetchCourse })(QuizCreate);