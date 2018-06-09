import React from 'react';
import { EhCheckbox } from '../../react-velonic';

const CheckboxComponent = () => (
  <div style={{ margin: 50 }}>
    <EhCheckbox
      id="checkbox1"
      label="Checkbox 1"
      value
      inline
      disabled
      onChange={(e, newValues) => { console.log(newValues); }}
    />
    <EhCheckbox
      id="checkbox2"
      label="Checkbox 2"
      onChange={(e, newValues) => { console.log(newValues); }}
      error="alaha"
      errorStyles={{ fontSize: '10px' }}
    />
  </div>
);

export default CheckboxComponent;
