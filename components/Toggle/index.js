import React from 'react';
import { Toggle } from '../../react-velonic';

const onToggle = () => { console.log('Toggle clicked'); };

const ToggleComponent = () => (
  <div style={{ margin: 50 }}>
    <Toggle
      className="toggle-demo"
      default
      onToggle={onToggle}
      style={{ margin: 5 }}
    />
    <Toggle
      className="toggle-demo"
      primary
      active
      onToggle={onToggle}
      style={{ margin: 5 }}
    />
    <Toggle
      className="toggle-demo"
      success
      active
      onToggle={onToggle}
      style={{ margin: 5 }}
    />
    <Toggle
      className="toggle-demo"
      warning
      active
      onToggle={onToggle}
      style={{ margin: 5 }}
    />
    <Toggle
      className="toggle-demo"
      danger
      active
      onToggle={onToggle}
      style={{ margin: 5 }}
    />
    <Toggle
      id="heloworld"
      type="danger"
      label="Hola"
      error="abola"
      reduxForm
      active
      onToggle={onToggle}
      style={{ margin: 5 }}
    />
  </div>
);

export default ToggleComponent;
