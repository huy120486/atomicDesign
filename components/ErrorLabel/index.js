import React from 'react';
import { TextField, ErrorLabel } from '../../react-velonic';

const TextFieldWithErrorLabel = () => (
  <div style={{ margin: 10 }}>
    <TextField id="error-demo" />
    <ErrorLabel componentId="error-demo" error="This field has an error label" style={{ margin: '50px' }} />
  </div>
);

export default TextFieldWithErrorLabel;
