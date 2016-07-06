import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../../actions/quizzes';
import { browserHistory } from 'react-router';
import ActiveTabs from '../../components/ActiveTabs';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import AddBox from 'material-ui/svg-icons/content/add-box';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Read from 'material-ui/svg-icons/action/chrome-reader-mode';
import Check from 'material-ui/svg-icons/action/check-circle';

import QuestionCreate from '../Questions/QuestionCreate';

const textStyle = {
    fontWeight: 600,
    fontSize: '18px',
};

const tileStyle = {
    margin: '10px',
    color: '#FFFFFF'
};

export default class QuizManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'questions',
            tabs: [
                {
                    value: 'questions',
                    icon: <Check/>
                },
                {
                    value: 'newQuestion',
                    icon: <AddBox/>,
                    label: 'ADD QUESTION'
                },
            ],
        };
    }

    componentDidMount() {
        this.props.fetchQuiz(this.props.params.quizId);
    }

    handleTabChange = (value) => {
        this.setState({ activeTab: value });
    }

    renderQuestions() {
        return this.props.selectedQuiz.questions.map( (question, index) => {
            return (
                <Paper key={question.id} class="col-md-2 tile" zDepth={2}>
                    <div style={tileStyle}>
                        <p style={textStyle}>{`Question #${index+1}`}</p>
                        <p style={textStyle}>Score: {question.score}</p>
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
                    <div id="questions" style={{ marginTop: '20px' }} class={this.state.activeTab !== 'questions' ? 'hidden' : ''}>
                        <div class="row">
                            {this.props.selectedQuiz.id ? this.renderQuestions() : null}
                        </div>
                    </div>

                    <div id="newQuestion" class={this.state.activeTab !== 'newQuestion' ? 'hidden' : ''}>
                        <QuestionCreate quizId={this.props.params.quizId} handleTabChange={this.handleTabChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        selectedQuiz: state.quizzes.selectedQuiz
    }
}

export default connect(mapStateToProps, { fetchQuiz })(QuizManage);