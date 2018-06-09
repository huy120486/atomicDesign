import React from 'react';
import { DayPicker } from '../../react-velonic';

const DayPickerCom = () => (
  <div style={{ margin: 100 }}>
    <DayPicker
      disabled
      placeholder="DD/MM/YYYY"
      onDayClick={day => console.log(day)}
      style={{ width: '50%' }}
    />
    <DayPicker
      placeholder="DD/MM/YYYY"
      initialTextValue="08/12/2017"
      closeOnDayClick
      disabledDays={{ before: new Date() }}
      yearNav
      onDayClick={day => console.log(day)}
    />
    <DayPicker
      placeholder="DD/MM/YYYY"
      closeOnDayClick
      onDayChange={day => console.log(day)}
      onDayClick={day => console.log(day)}
    />
  </div>
);

export default DayPickerCom;
