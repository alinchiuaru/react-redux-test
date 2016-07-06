import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import { addAnswer, markAnswer, updateQuestionText, updateAnswerText, removeAnswer, updateQuestionScore } from '../../actions/questions';

import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const answerStyle = {
    display: 'flex',
    height: '50px',
    margin: '20px 0',
    alignItems: 'center',
}

class QuestionCreate extends Component {
    componentWillMount() {
        this.updateQuestionText = _.debounce(this.updateQuestionText, 300);
        this.updateAnswerText = _.debounce(this.updateAnswerText, 300);
        this.updateQuestionScore = _.debounce(this.updateQuestionScore, 300);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    markAnswer(index, isChecked) {
        this.props.markAnswer(index, isChecked);
    }

    updateAnswerText(index, value) {
        this.props.updateAnswerText(index, value);
    }

    updateQuestionText(value) {
        this.props.updateQuestionText(value);
    }

    updateQuestionScore(value) {
        this.props.updateQuestionScore(value);
    }

    renderAnswers() {
        return this.props.question.answers.map( (answer, index) => {
            return (
                 <div style={answerStyle} key={index}>
                    <TextField hintText="Answer" required fullWidth={true} onChange={e => this.updateAnswerText(index, e.target.value)}/>
                    <Checkbox style={{ width: 0 }}
                        checked={answer.correct}
                        disabled={answer.defaultAnswer ? true: false}
                        onCheck={ (event, isChecked) => this.markAnswer(index, isChecked) }
                    />
                </div>
            );
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { questionText, score, answers } = this.props.question;
        const question = {
            title: questionText,
            score,
            questionData: JSON.stringify({ answers: answers }),
        };

        console.log(question);
    }

    render() {
        return (
            <div class="container-fluid">
                <h1 class="text-display-1">Add a new question</h1>

                <form onSubmit={this.handleSubmit}>
                    <Paper class="col-md-6" style={{ padding: '50px' }}>
                        <div>
                            <TextField
                              floatingLabelText="Please enter the question"
                              multiLine={true}
                              rows={2}
                              rowsMax={4}
                              fullWidth={true}
                              required
                              onChange={ e => this.updateQuestionText(e.target.value) }
                            />
                        </div>

                        <div style={{ marginBottom: '100px' }}>
                            <TextField
                              floatingLabelText="Score"
                              type="number"
                              min={1}
                              max={100}
                              required
                              onChange={ e => this.updateQuestionScore(e.target.value) }
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <RaisedButton primary={true} label="Add answer" onClick={this.props.addAnswer} />
                            <RaisedButton secondary={true} label="Remove answer" onClick={this.props.removeAnswer} disabled={this.props.question.answers.length === 2}/>
                        </div>

                        {this.renderAnswers()}

                        <div style={{ marginTop: '50px', 'textAlign': 'center' }}>
                            <RaisedButton primary={true} type="submit" label="Submit"/>
                        </div>
                    </Paper>
                </form>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        question: state.addQuestionForm
    };
}

export default connect(mapStateToProps, {addAnswer, markAnswer, updateQuestionText, updateAnswerText, removeAnswer, updateQuestionScore})(QuestionCreate);