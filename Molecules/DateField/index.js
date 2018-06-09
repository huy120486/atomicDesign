import React from 'react';
import moment from 'moment';
import { DateField } from '../../react-velonic';

const DateFieldComponent = () => (
  <div style={{ margin: 50 }}>
    <DateField
      id="dateField"
      label="Date Field"
      date={moment()}
      onDateChange={(newDate) => { console.log('new', newDate); }}
    />
    <DateField
      id="dateFieldWithRange"
      label="Date Field with Range"
      range
      value={{
        startDate: moment(),
        endDate: moment().add(7, 'days'),
      }}
      onDatesChange={(dates) => { console.log(dates); }}
    />
  </div>
);

export default DateFieldComponent;
