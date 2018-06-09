import React from 'react';
import { LinkButton } from '../../react-velonic';

const LinkButtonComponent = () => (
  <div style={{ margin: 10 }}>
    <div>
      <LinkButton
        type="info"
        label="Google"
        leftIcon="nature_butterfly"
        href="http://google.com"
        active
      />
    </div>
    <div>
      <LinkButton
        type="danger"
        href="http://google.com"
        active
        disabled
        leftIcon="nature_butterfly"
      />
    </div>
    <div>
      <LinkButton
        type="pink"
        leftIcon="nature_butterfly"
        rightIcon="nature_butterfly"
        width="lg"
        size="lg"
        onClick={() => { console.log('click'); }}
      >
      Nature ButterFly
    </LinkButton>
    </div>
  </div>
);

export default LinkButtonComponent;
