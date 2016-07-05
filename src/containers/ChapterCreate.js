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
        height: '200px',
        // backgroundImage: 'url("http://www.dogtownmedia.com/wp-content/uploads/material-design-android-app-developer.jpg")',
        // backgroundSize: 'cover',
        // backgroundPosition: '50%',
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
                this.context.router.push(`/courses/${this.props.params.courseId}`);
            });
    }

    render() {
        return (
            <div class="container-fluid">
                <Paper zDepth={2} style={holderStyles}>
                    <Paper class="col-md-12" style={previewStyle.header} zDepth={0}>
                        <div>
                            <h1 class="text-display-1">{ this.state.title ? this.state.title : 'Title' }</h1>
                            <h1 class="text-headline">{ this.state.description ? this.state.description : 'Description' }</h1>
                        </div>
                    </Paper>

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
