import React from 'react';
import { CheckboxGroup } from '../../react-velonic';

const OPTIONS = [
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
  { label: 'option 3', value: 3 },
];

const CheckboxGroupComponent = () => (
  <div style={{ margin: 50 }}>
    <CheckboxGroup
      options={OPTIONS}
      value={[1, 2]}
      onChange={(newValues) => { console.log(newValues); }}
      inline
    />
  </div>
);

export default CheckboxGroupComponent;
