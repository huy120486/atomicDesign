import React from 'react';
import { DatePicker } from '../../react-velonic';

const DatePickerComponent = () => (
  <div style={{ margin: 50 }}>
    <DatePicker
      date="2017-6-1"
      minYear={1990}
      maxYear={2030}
      onChange={(newValue) => { console.log(newValue); }}
    />
  </div>
);

export default DatePickerComponent;
