import React from 'react';
import { Stepper } from '../../react-velonic';

const Step = Stepper.Step;
const onChange = (stepChange) => console.log(stepChange);

const props = {
  id: 'stepper-demo',
  steps: ['label 1', 'label 2', 'label 3', 'label 4', 'label 5'],
  selectedStep: 3,
  buttons: [
    {
      label: 'button 1',
    },
    {
      label: 'button 2',
    }
  ],
  activatedStep: 3,
  onChange: onChange,
};

const StepperComponent = () => (
  <div style={{ margin: 50 }}>
    <Stepper {...props} vertical>
      <Step>Content 1</Step>
      <Step>Content 2</Step>
      <Step>Content 3</Step>
      <Step>Content 4</Step>
      <Step>Content 5</Step>
    </Stepper>
  </div>
);

export default StepperComponent;
