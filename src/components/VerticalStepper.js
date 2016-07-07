import React from 'react';
import {
    Step,
    Stepper,
    StepButton,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * A basic vertical non-linear implementation
 */
class VerticalNonLinear extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < this.props.steps.length - 1) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderSteps = () => {
        return this.props.steps.map( (step, index) => {
          return (
                <Step key={index}>
                    <StepButton onClick={() => this.setState({stepIndex: index})}>
                      <p style={{ fontSize: '18px' }}>{step[this.props.title]}</p>
                    </StepButton>

                    <StepContent style={{ fontSize: '16px' }}>
                          <p>
                            {step.description}
                          </p>
                          {this.renderStepActions(index)}
                    </StepContent>
                </Step>
          );
        });
    }

  renderStepActions (step) {
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
          disabled={step === this.props.steps.length - 1}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;

    return (
        <Stepper activeStep={stepIndex} linear={false} orientation="vertical">
            {this.renderSteps()}
        </Stepper>
    );
  }
}

export default VerticalNonLinear;