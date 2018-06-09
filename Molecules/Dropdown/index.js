import React from 'react';
import { DropdownButton, Icon, CheckboxGroup } from '../../react-velonic';

const options = [
  { value: 'one', label: 'One', icon: 'ui-1_edit-74', iconType: 'glyph', style: { cursor: 'pointer' } },
  { value: 'two', label: 'Two', icon: 'ui-1_trash', iconType: 'glyph', style: { color: 'red' } },
  { divider: true },
  { value: 'three', label: 'Three', icon: 'ui-1_trash', iconType: 'glyph', style: { color: 'red' } },
  { value: 'four', label: 'Four, href', icon: 'ui-1_edit-74', iconType: 'glyph', href: 'www.google.com', target: '_blank' },
];

const logChange = (val) => {
  console.log('Selected:', val);
};


const OPTIONS = [
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
  { label: 'option 3', value: 3 },
];

const CheckboxGroupComponent = () => (
  <div style={{ padding: '10px', color: '#333333' }}>
    <CheckboxGroup
      options={OPTIONS}
      value={[1, 2]}
      onChange={(newValues) => { console.log(newValues); }}
    />
  </div>
);

const MenuComponent = () => (
  <div style={{ margin: 100, marginLeft: 300 }}>
    <DropdownButton
      type="success"
      label="Google"
      options={options}
      onChange={logChange}
    />
    <DropdownButton
      type="success"
      label="Google"
      distance={-100}
      onChange={logChange}
    >
      <a onClick={logChange}>
        <Icon
          name="ui-1_edit-74"
          type="glyph"
          style={{ color: 'black', marginRight: '10px', cursor: 'pointer' }}
        />
        One
      </a>
      <a onClick={logChange}>
        <Icon
          name="ui-1_trash"
          type="glyph"
          style={{ color: 'black', marginRight: '10px', cursor: 'pointer' }}
        />
        Two
      </a>
    </DropdownButton>
    <DropdownButton
      type="success"
      label="Google"
      onChange={logChange}
      customMenu
    >
      <CheckboxGroupComponent />
    </DropdownButton>
  </div>
);

export default MenuComponent;
