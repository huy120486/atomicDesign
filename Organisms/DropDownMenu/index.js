import React from 'react';
import { DropDownMenu } from '../../react-velonic';

const items = [
  <span>Item 1</span>,
  <span>Item 2</span>,
  <span>Item 3</span>,
];

const DropDownMenuComponent = () => (
  <DropDownMenu
    style={{ marginLeft: '100px' }}
    items={items}
    open
  />
);

export default DropDownMenuComponent;
