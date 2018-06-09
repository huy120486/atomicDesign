import React from 'react';
import { Field } from 'redux-form';

import {
  ReduxFormTextField,
} from '../../react-velonic';

export const PureContractForm = ({ isForAdmin }) => (
  <div>
    <Field
      id="id"
      name="id"
      component={ReduxFormTextField}
      style={{ display: 'none' }}
    />
    <Field
      id="name"
      name="name"
      component={ReduxFormTextField}
      type="text"
      placeholder="Document Name"
      label="Document Name"
    />
    { isForAdmin &&
      <Field
        id="admin"
        name="Admin"
        component={ReduxFormTextField}
        type="text"
        placeholder="Test passing additional props"
        label="Admin Field"
      />
    }
  </div>
);


export default PureContractForm;
