import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourse } from '../actions/courses';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Add from 'material-ui/svg-icons/content/add';

const textStyle = {
    fontWeight: 600,
    fontSize: '18px',
};

class CoursePage extends Component {
    componentDidMount() {
        this.props.fetchCourse(this.props.params.courseId);
    }

    renderQuizzes() {
        return this.props.selectedCourse.quizzes.map( quiz => {
            return (
                <Paper key={quiz.id} class="col-md-2 tile" zDepth={2}>
                    <div style={{ marginLeft: '5px', marginBottom: '10px', color: '#FFFFFF'}}>
                        <p style={textStyle}>{quiz.name}</p>
                    </div>
                </Paper>
            );
        });
    }

    renderChapters() {
        return this.props.selectedCourse.chapters.map( chapter => {
            return (
                <Paper key={chapter.id} class="col-md-2 tile tile-chapter" zDepth={2}>
                    <div style={{ marginLeft: '5px', marginBottom: '10px', color: '#FFFFFF'}}>
                        <p style={textStyle}>{chapter.name}</p>
                    </div>
                </Paper>
            );
        });
    }

    render() {
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

                        {this.props.selectedCourse.id ? this.renderQuizzes(): ''}
                    </div>
                </div>

                <div id="chapters">
                    <h2 class="text-headtitle">Chapters</h2>
                    <Divider inset={false} />

                    <div class="row between-xs">
                        <Paper class="col-md-2 tile tile-add tile-chapter" zDepth={2}>
                            <div style={{width: '100%', height:'100%'}}>
                                <Add style={{width: '100%', height:'100%'}} color={'#FAFAFA'}/>
                            </div>
                        </Paper>

                        {this.props.selectedCourse.id ? this.renderChapters(): ''}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        selectedCourse: state.courses.selectedCourse
    }
}

export default connect(mapStateToProps, { fetchCourse })(CoursePage);