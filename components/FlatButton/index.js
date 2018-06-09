import React from 'react';
import { FlatButton } from '../../react-velonic';

const FlatButtonComponent = () => (
  <div style={{ margin: 10 }}>
    <div className="button-type-details">
      <p>Button Types</p>
      <FlatButton label="Default" />
      <FlatButton type="primary" label="Primary" />
      <FlatButton type="success" label="Success" />
      <FlatButton type="info" label="Info" />
      <FlatButton type="warning" label="Warning" />
      <FlatButton type="danger" label="Danger" />
      <FlatButton type="inverse" label="Inverse" />
      <FlatButton type="purple" label="Purple" />
      <FlatButton type="pink" label="Pink" />
    </div>
    <FlatButton
      type="info"
      label="Google"
      block
      custom
      active
    />
    <FlatButton
      type="danger"
      href="http://google.com"
      active
      leftIcon="nature_butterfly"
    />
    <FlatButton
      type="pink"
      leftIcon="nature_butterfly"
      rightIcon="nature_butterfly"
      width="lg"
      size="lg"
      rounded
      onClick={() => { console.log('click'); }}
    >
      Nature ButterFly
    </FlatButton>

    <FlatButton
      type="danger"
      href="http://google.com"
      target="_blank"
      active
    >
      Button with Target Blank
    </FlatButton>
  </div>
);

export default FlatButtonComponent;
