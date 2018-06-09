import React from 'react';
import { fieldWithError, TextField } from '../../react-velonic';

const TextFieldWithError = fieldWithError(TextField);

const TextFieldWithErrorDemo = () => (
  <div style={{ margin: 50 }}>
    <TextFieldWithError
      hasError
      autoFocus
      error="This is a text input with error"
    />
  </div>
);

export default TextFieldWithErrorDemo;
