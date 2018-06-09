import React from 'react';
import { RadioGroup } from '../../react-velonic';

const OPTIONS = [
  {
    value: '1',
    label: 'Drink',
  },
  {
    value: '2',
    label: 'Eat',
  },
  {
    value: '3',
    label: 'Others',
    disabled: true,
  },
];

const RadioGroupComponent = () => (
  <div style={{ margin: 50 }}>
    <RadioGroup
      label="RadioGroup Demo"
      options={OPTIONS}
      value="2"
      onChange={(newValue) => { console.log(newValue); }}
      className="radio-group"
      velonicClassName="text-md"
    />
  </div>
);

export default RadioGroupComponent;
