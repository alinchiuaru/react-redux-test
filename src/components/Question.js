import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

function renderChoices (choices, onCheck) {
    const answers = choices.map( element => {
            return (
                <Checkbox
                    class="text-headline"
                    checked={element.correct}
                    value={element.answer}
                    label={element.answer}
                    key={element.answer}
                    onCheck={ (event, isChecked) => onCheck(element.answer, isChecked) }
                    style={{ margin: '10px 0' }}
                    iconStyle={{ width: '36px', height: '36px'}}
                    labelStyle={{ lineHeight: '36px' }}
                  />
            );
        });

    return (
        <div>
            {answers}
        </div>
    );
}

const Question = (props) => {
    return (
        <div>
            <h2 class="text-headline">
                {props.question.title}
            </h2>

            <div style={{ padding: '50px 100px', textAlign: 'left', marginTop: '20px' }}>
                {props.question.questionData ? renderChoices(props.question.questionData, props.onCheck) : ''}
            </div>
        </div>
    );
}

export default Question;