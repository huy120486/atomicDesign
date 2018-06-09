import React from 'react';
import { Badge } from '../../react-velonic';

const BadgeComponent = () => (
  <div>
    <Badge
      text="Primary Badge"
      type="primary"
    />
    <Badge
      text="Info Badge"
      type="info"
    />
    <Badge
      text="Success Badge"
      type="success"
    />
    <Badge
      text="Danger Badge"
      type="danger"
    />
    <Badge
      text="Warning Badge"
      type="warning"
    />
    <Badge
      text="Customize Badge"
      type="primary"
      style={{ color: 'red', borderRadius: '0' }}
    />
  </div>
);

export default BadgeComponent;
