import React from 'react';
import { ButtonGroup, FlatButton } from '../../react-velonic';

const onClick = message => () => console.log(`${message} button click`);

const children = [
  <FlatButton
    label="All"
    onClick={onClick('All')}
    custom
  />,
  <FlatButton
    type="info"
    label="Pending"
    onClick={onClick('Pending')}
    custom
  />,
  <FlatButton
    type="success"
    label="Completed"
    onClick={onClick('Completed')}
    custom
  />,
  <FlatButton
    type="danger"
    label="Declined"
    onClick={onClick('Declined')}
    custom
  />,
];

const ButtonGroupComponent = () => (
  <div style={{ margin: 50 }}>
    <ButtonGroup
      className="btn-group-demo"
      children={children}
    />
  </div>
);

export default ButtonGroupComponent;
