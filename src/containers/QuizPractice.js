import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

import { fetchQuiz, selectQuestion, answerQuestion, skipQuestion } from '../actions/quizzes';

class QuizPractice extends Component {
    componentDidMount() {
        this.props.fetchQuiz(this.props.routeParams.quizId)
            .then(() => {
                this.props.selectQuestion(0);
            });
    }

    renderAnswers() {
        const answersData = JSON.parse(this.props.quizPractice.selectedQuestion.questionData).answers;

        const answers = answersData.map(function(element) {
            return (
                <Checkbox
                    class="text-headline"
                    value={element.answer}
                    label={element.answer}
                    key={element.answer}
                    iconStyle={{ width: '36px', height: '36px' }}
                  />
            );
        });

        return (
            <div>
                {answers}
            </div>
        );
    }

    render() {
        return (
            <div class="container-fluid">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Paper class="col-md-12" zDepth={2} style={{ margin: '50px', padding: '30px', textAlign: 'center' }}>
                        <h2 class="text-headline">
                            {this.props.quizPractice.selectedQuestion.title}
                        </h2>

                        <div style={{ padding: '50px 0px', textAlign: 'left' }}>
                            {this.props.quizPractice.selectedQuestion.questionData ? this.renderAnswers() : ''}
                        </div>

                        <RaisedButton label="Submit" secondary={true} style={{ width: '150px', height: '50px', margin: '20px'}} labelStyle={{lineHeight: '50px'}} />
                        <RaisedButton onMouseDown={ () => this.props.skipQuestion(0) } label="Skip" secondary={true} style={{ width: '150px', height: '50px', margin: '20px'}} labelStyle={{lineHeight: '50px'}} />
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return { quizPractice: state.quizPractice }
}

export default connect(mapStateToProps, { fetchQuiz, selectQuestion, answerQuestion, skipQuestion })(QuizPractice);