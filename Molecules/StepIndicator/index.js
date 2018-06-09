import React from 'react';
import { StepIndicator } from '../../react-velonic';

const STEPSEX1 = [
  { stepName: '1', description: 'Step 1' },
  { stepName: '2', description: 'Step 2' },
  { stepName: '3', description: 'Step 3' },
  { stepName: '4', description: 'Step 4' },
];

const STEPSEX2 = [
  { stepName: '1', description: 'Done Step' },
  { stepName: '2', description: 'Done Step' },
  { stepName: '3', description: 'Selected Step' },
  { stepName: '4', description: 'Done Step' },
  { stepName: '5', description: 'Activated Step' },
  { stepName: '6', description: 'Unactivated Step' },
];

const StepIndicatorComponent = () => (
  <div>
    <StepIndicator
      className="step-indicator"
      steps={STEPSEX1}
      selectedStep={2}
      activatedStep={2}
      style={{ padding: '50px' }}
      onStepClick={e => console.log(e)}
    />
    <StepIndicator
      className="step-indicator"
      steps={STEPSEX2}
      selectedStep={2}
      activatedStep={4}
      style={{ padding: '50px' }}
      onStepClick={e => console.log(e)}
    />
  </div>
);

export default StepIndicatorComponent;
