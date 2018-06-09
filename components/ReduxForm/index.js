import React from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';
import {
  ReduxFormTextField,
  ReduxFormSelectField,
  ReduxFormDayPicker,
  ReduxFormTagInput,
} from '../../react-velonic';

const required = value => (value ? undefined : 'Required field');

const OPTIONS = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
];

export const PureReduxForm = () => (
  <div>
    <Field
      id="name"
      name="name"
      component={ReduxFormTextField}
      type="text"
      placeholder="Name"
      label="Name"
      validate={required}
    />
    <Field
      id="option"
      name="option"
      label="Option"
      component={ReduxFormSelectField}
      options={OPTIONS}
      validate={required}
      clearable={false}
      initialValue="1"
    />
    <Field
      id="day"
      name="day"
      label="Day"
      component={ReduxFormDayPicker}
    />
    <Field
      id="tag-input"
      name="tag-input"
      label="Tag Input"
      component={ReduxFormTagInput}
    />
  </div>
);

export default reduxForm({
  form: 'simple',
})(PureReduxForm);
