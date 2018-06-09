import React from 'react';
import { ButtonsGroup } from '../../react-velonic';

const ButtonGroupComponent = () => (
  <div>
    <ButtonsGroup
      items={[
        { label: 'yes', value: 'yes' },
        { label: 'no', value: 'no' },
      ]}
      value="yes"
      onChange={() => {}}
    />
  </div>
);

export default ButtonGroupComponent;
