import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Paper from 'material-ui/paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import { fetchQuiz, fetchQuizScore } from '../../actions/quizzes';

const buttonStyle = {
    label: {
        lineHeight: '50px', fontWeight: 600
    },
    button: {
        width: '150px', height: '50px', margin: '20px'
    }
};

const style = {
    margin: '50px',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#FAFAFA',
    border: '1px solid #E0E0E0',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
};

class QuizFinish extends React.Component {
    componentDidMount() {
        this.props.fetchQuiz(this.props.params.quizId);
        this.props.fetchQuizScore(this.props.params.quizId);
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
                    <Paper class="col-md-12" zDepth={2} style={style}>
                        <h3 class="text text-headline">You have received a score of <b>{this.props.quizPractice.score.receivedScore}</b> points out of <b>{this.props.quizPractice.score.totalScore}</b> points.</h3>
                        <RaisedButton
                            label="EXIT" primary={true}
                            style={buttonStyle.button}
                            labelStyle={buttonStyle.label}
                            onClick={()=> browserHistory.push('/dashboard')}/>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quizPractice: state.quizPractice
    }
}

export default connect(mapStateToProps, {fetchQuiz, fetchQuizScore})(QuizFinish);