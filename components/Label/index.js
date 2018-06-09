import React from 'react';
import { Label } from '../../react-velonic';

const LabelComponent = () => (
  <div style={{ margin: 50 }} >
    <Label text="Label Demo" />
    <Label text="Label Demo" type="success" />
    <Label text="Label Demo" type="info" />
    <Label text="Label Demo" type="warning" />
    <Label text="Label Demo" type="danger" />
    <Label text="Label Demo" type="inverse" />
    <Label text="Label Demo" type="purple" />
    <Label text="Label Demo" type="pink" />
    <Label text="Label with velonicClassName" type="primary" velonicClassName="m-l-10" />
    <Label text="Label with styling" type="info" style={{ color: 'black' }} />
  </div>
);

export default LabelComponent;
