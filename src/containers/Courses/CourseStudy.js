import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourse } from '../../actions/courses';
import { browserHistory } from 'react-router';
import ActiveTabs from '../../components/ActiveTabs';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Add from 'material-ui/svg-icons/content/add';
import ViewQuilt from 'material-ui/svg-icons/action/view-quilt';
import Read from 'material-ui/svg-icons/action/chrome-reader-mode';
import Check from 'material-ui/svg-icons/action/check-circle';

import VerticalStepper from '../../components/VerticalStepper';

const textStyle = {
    fontWeight: 600,
    fontSize: '18px',
};

const tileStyle = {
    margin: '10px',
    color: '#FFFFFF'
};

const blackWhite = {
    'WebkitFilter': 'grayscale(100%)',
    'filter': 'grayscale(100%)',
}

class CourseStudy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeModal: null,
            activeTab: 'overview',
            tabs: [
                {
                    value: 'overview',
                    icon: <ViewQuilt/>
                },
                {
                    value: 'chapters',
                    icon: <Read/>
                },
                {
                    value: 'quizzes',
                    icon: <Check/>
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
            var hasQuestions = quiz.questions.length > 0;

            return (
                <Paper style={ !hasQuestions ? blackWhite: {} }
                    key={quiz.id} class="col-md-2 tile"
                    zDepth={2}
                    onClick={ () => hasQuestions ? browserHistory.push(`/quiz/${quiz.id}/practice`) : ''}>
                    <div style={tileStyle}>
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
                    <div style={tileStyle}>
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
                    <div id="overview" style={{ marginTop: '20px' }} class={this.state.activeTab !== 'overview' ? 'hidden' : ''} >
                        <h1 class="text-display-1">{this.props.selectedCourse.title}</h1>
                        <h2 class="text-headline">{this.props.selectedCourse.description}</h2>
                        <div class="row">
                            <div class="col-md-6 col-xs-12" style={{ marginTop: '50px' }}>
                                <h3 class="text-headline">Chapters</h3>
                                <Divider inset={false} />
                                {this.props.selectedCourse.id ? <VerticalStepper title="title" steps={this.props.selectedCourse.chapters} /> : ''}
                            </div>
                            <div class="col-md-6 col-xs-12" style={{ marginTop: '50px' }}>
                                <h3 class="text-headline">Quizzes</h3>
                                <Divider inset={false} />
                                {this.props.selectedCourse.id ? <VerticalStepper title="name" steps={this.props.selectedCourse.quizzes} /> : ''}
                            </div>
                        </div>
                    </div>

                    <div id="chapters" style={{ marginTop: '20px' }} class={this.state.activeTab !== 'chapters' ? 'hidden' : ''} >
                        <div class="row">
                            {this.props.selectedCourse.id ? this.renderChapters(): ''}
                        </div>
                    </div>

                    <div id="quizzes" style={{ marginTop: '20px' }}  class={this.state.activeTab !== 'quizzes' ? 'hidden' : ''} >
                        <div class="row">
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

export default connect(mapStateToProps, { fetchCourse })(CourseStudy);