import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourse } from '../../actions/courses';
import { Link } from 'react-router';
import ActiveTabs from '../../components/ActiveTabs';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Add from 'material-ui/svg-icons/content/add';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Read from 'material-ui/svg-icons/action/chrome-reader-mode';
import Check from 'material-ui/svg-icons/action/check-circle';

const textStyle = {
    fontWeight: 600,
    fontSize: '18px',
};

class CourseManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'chapters',
            tabs: [
                {
                    value: 'chapters',
                    icon: <Read/>
                },
                {
                    value: 'quizzes',
                    icon: <Check/>
                },
                {
                    value: 'students',
                    icon: <MapsPersonPin/>
                },
            ],
        };
    }

    handleTabChange = (value) => {
        this.setState({ activeTab: value });
    }

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
                        <p style={textStyle}>{chapter.title}</p>
                    </div>
                </Paper>
            );
        });
    }

    render() {
        return (
            <div>
                <ActiveTabs value={this.state.activeTab} onChange={this.handleTabChange} tabs={this.state.tabs}/>

                <div class="container-fluid">
                    <div id="chapters" style={{ marginTop: '20px' }} class={this.state.activeTab !== 'chapters' ? 'hidden' : ''} >
                        <div class="row">
                            <Paper class="col-md-2 tile tile-add tile-chapter" zDepth={2}>
                                <Link to={`/courses/${this.props.params.courseId}/chapter/add`}>
                                    <div style={{width: '100%', height:'100%'}}>
                                        <Add style={{width: '100%', height:'100%'}} color={'#FAFAFA'}/>
                                    </div>
                                </Link>
                            </Paper>

                            {this.props.selectedCourse.id ? this.renderChapters(): ''}
                        </div>
                    </div>

                    <div id="quizzes" style={{ marginTop: '20px' }}  class={this.state.activeTab !== 'quizzes' ? 'hidden' : ''} >
                        <div class="row">
                            <Paper class="col-md-2 tile tile-add" zDepth={2}>
                                <div style={{width: '100%', height:'100%'}}>
                                    <Add style={{width: '100%', height:'100%'}} color={'#FAFAFA'}/>
                                </div>
                            </Paper>

                            {this.props.selectedCourse.id ? this.renderQuizzes(): ''}
                        </div>
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

export default connect(mapStateToProps, { fetchCourse })(CourseManage);