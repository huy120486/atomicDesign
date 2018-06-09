import React from 'react';
import { SelectField } from '../../react-velonic';

const OPTIONS = [
  { value: 'production', label: 'Production' },
  { value: 'staging', label: 'Staging' },
  { value: 'development', label: 'Development' },
];

const SelectFieldComponent = () => (
  <div style={{ margin: 50 }}>
    <SelectField
      id="demo"
      label="SelectField Test"
      options={OPTIONS}
      value="production"
      clearable={false}
      reduxForm
      onChange={(val) => { console.log(val); }}
      error="Error"
      errorStyles={{ fontSize: '10px' }}
      creatable
    />
    <SelectField
      id="demo"
      label="SelectField Test"
      options={OPTIONS}
      fetchData={(val) => { console.log('val when fetch', val); }}
      lazyFetch
      onChange={(val) => { console.log(val); }}
    />
    <SelectField
      id="demo"
      label="SelectField Test"
      options={OPTIONS}
      multi
      reduxForm
      value={['production', 'development']}
      onChange={(val) => { console.log(val); }}
    />
  </div>
);

export default SelectFieldComponent;
