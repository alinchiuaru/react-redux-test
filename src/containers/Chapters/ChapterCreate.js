import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import TinyMCE from 'react-tinymce';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import axios from 'axios';
const formHolderStyle = {
    margin: '20px 0px',
    textAlign: 'center'
};

const holderStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FAFAFA'
};

const previewStyle = {
    header: {
        height: '200px',
        backgroundColor: '#009688',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
};

export default class ChapterCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            lectureNote: ''
        };

        this.handleLectureNoteChange = this.handleLectureNoteChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    handleLectureNoteChange(e) {
        this.setState({ lectureNote: e.target.getContent() });
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, description, lectureNote } = this.state;
        axios.post('/chapters', { title, description, lectureNote, courseId: this.props.params.courseId })
            .then( () => {
                this.context.router.push(`/courses/${this.props.params.courseId}/manage`);
            });
    }

    render() {
        return (
            <div class="container-fluid">
                <Paper zDepth={2} style={holderStyles}>
                    <div class="col-md-12 col-xs-12" style={formHolderStyle}>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <TextField
                                  hintText="Title"
                                  type="text"
                                  fullWidth={true}
                                  value={this.state.title}
                                  onChange={this.handleTitleChange}
                                  required
                                />
                            </div>

                            <div>
                                <TextField
                                  hintText="Description"
                                  type="text"
                                  fullWidth={true}
                                  value={this.state.description}
                                  onChange={this.handleDescriptionChange}
                                  required
                                />
                            </div>

                            <div style={{ marginTop: '25px' }}>
                                <p style={{ color: '#b7b7b7', textAlign: 'left', 'fontSize': '17px' }}>Lecture note</p>
                                <div style={{ marginTop: '15px' }}>
                                    <TinyMCE
                                        content=""
                                        config={{
                                            plugins: 'link image code',
                                            statusbar: false,
                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                                            height: '50vh',
                                            font_formats: 'Roboto,sans-serif,helvetica'
                                        }}
                                        onChange={this.handleLectureNoteChange}
                                    />
                                </div>
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
