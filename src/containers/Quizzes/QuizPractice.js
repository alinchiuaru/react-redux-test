import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import Question from '../../components/Question';

import { fetchQuizProgress, selectQuestion, answerQuestion, skipQuestion, markAnswer, sendQuestionAnswer, fetchQuiz } from '../../actions/quizzes';

const buttonStyle = {
    label: {
        lineHeight: '50px', fontWeight: 600
    },
    button: {
        width: '150px', height: '50px', margin: '20px'
    }
};

class QuizPractice extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.props.fetchQuiz(this.props.routeParams.quizId)
            .then(() => {
                this.props.fetchQuizProgress(this.props.routeParams.quizId)
                        .then(() => {
                            this.props.selectQuestion(0);
                        });
            });
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.quizPractice.finished ) {
            this.context.router.push(`/quiz/${this.props.routeParams.quizId}/finish`);
        }
    }

    anyAnswerSelected() {
        if ( this.props.quizPractice.finished ) {
            return false;
        }

        const questionDataArray = this.props.quizPractice.selectedQuestion.questionData || [];

        return questionDataArray.length === questionDataArray.filter( element => element.correct == false ).length;
    }

    answerQuestion() {
        let answerObject = {
            id: this.props.quizPractice.selectedQuestion.id,
            answers: this.props.quizPractice.selectedQuestion.questionData
        };

        this.props.sendQuestionAnswer(answerObject);
    }

    render() {
        return (
            <div class="container-fluid">
                <div style={{ margin: '20px 0' }}>
                    <h2 class="text text-display-1">{this.props.quizPractice.quiz.name}</h2>
                    <h3 class="text text-headline">{this.props.quizPractice.quiz.description}</h3>
                </div>
                <Divider inset={false} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Paper class="col-md-12" zDepth={2} style={{ margin: '50px', padding: '30px', textAlign: 'center', backgroundColor: '#FAFAFA', border: '1px solid #E0E0E0' }}>
                       { this.props.quizPractice.selectedQuestion ?
                        <Question question={this.props.quizPractice.selectedQuestion} onCheck={this.props.markAnswer} /> : '' }

                        <RaisedButton
                            label="Submit" secondary={true}
                            disabled={this.anyAnswerSelected()}
                            onMouseDown={ () => this.answerQuestion() }
                            style={buttonStyle.button}
                            labelStyle={buttonStyle.label} />

                        <RaisedButton
                            disabled={this.props.quizPractice.questionsList.length <= 1}
                            onMouseDown={ () => this.props.skipQuestion(0) } label="Skip" secondary={true}
                            style={buttonStyle.button}
                            labelStyle={buttonStyle.label} />
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return { quizPractice: state.quizPractice }
}

export default connect(mapStateToProps, { fetchQuizProgress, selectQuestion, answerQuestion, skipQuestion, markAnswer, sendQuestionAnswer, fetchQuiz })(QuizPractice);