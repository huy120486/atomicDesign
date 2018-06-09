import React from 'react';
import { FloatButton } from '../../react-velonic';

const buttons = [
  {
    onClick: () => { console.log('yoooooo'); },
    icon: 'weather_fahrenheit',
    label: 'Button A',
  },
  {
    onClick: () => { console.log('muahahaha'); },
    icon: 'location_flag-triangle',
    label: 'Button B',
  },
];

const FloatButtonComponent = () => (
  <div style={{ margin: 10 }}>
    <FloatButton
      effect="zoomin"
      method="hover"
      position="br"
      iconActive="ui-1_simple-add"
      iconResting="ui-1_simple-remove"
      menuItems={buttons}
      type="glyph"
    />
  </div>
);

export default FloatButtonComponent;
