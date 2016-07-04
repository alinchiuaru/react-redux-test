import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyCourses } from '../actions/courses';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Add from 'material-ui/svg-icons/content/add';

const textStyle = {
    fontWeight: 600,
    fontSize: '18px',
};

export default class CoursePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div class="container-fluid">
                <div id="quizzes">
                    <h2 class="text-headtitle">Quizzes</h2>
                    <Divider inset={false} />

                    <div class="row between-xs">
                        <Paper class="col-md-2 tile tile-add" zDepth={2}>
                            <div style={{width: '100%', height:'100%'}}>
                                <Add style={{width: '100%', height:'100%'}} color={'#FAFAFA'}/>
                            </div>
                        </Paper>

                        <Paper class="col-md-2 tile" zDepth={2}>
                            <div style={{ marginLeft: '5px', marginBottom: '10px', color: '#FFFFFF'}}>
                                <p style={textStyle}> Quiz title goes here </p>
                            </div>
                        </Paper>

                        <Paper class="col-md-2 tile" zDepth={2}>
                            <div style={{ marginLeft: '5px', marginBottom: '10px', color: '#FFFFFF'}}>
                                <p style={textStyle}> Quiz title goes here </p>
                            </div>
                        </Paper>

                        <Paper class="col-md-2 tile" zDepth={2}>
                            <div style={{ marginLeft: '5px', marginBottom: '10px', color: '#FFFFFF', textAlign: 'left'}}>
                                <p style={textStyle}> Quiz title goes here </p>
                            </div>
                        </Paper>

                        <Paper class="col-md-2 tile" zDepth={2}>
                            <div style={{ marginLeft: '5px', marginBottom: '10px', color: '#FFFFFF', textAlign: 'left'}}>
                                <p style={textStyle}> Quiz title goes here </p>
                            </div>
                        </Paper>

                        <Paper class="col-md-2 tile" zDepth={2}>
                            <div style={{ marginLeft: '5px', marginBottom: '10px', color: '#FFFFFF', textAlign: 'left'}}>
                                <p style={textStyle}> Quiz title goes here </p>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}