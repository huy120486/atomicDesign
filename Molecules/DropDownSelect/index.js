import React from 'react';
import { DropDownSelect } from '../../react-velonic';

const settings = {
  name: 'Select DropDown',
  options: {
    selectAll: true,
  },
  data: [
    {
      label: 'Group 1',
      name: 'group_1',
      items: [
        {
          label: 'Item 1',
          value: 'item_1',
        },
        {
          label: 'Item 2',
          value: 'item_2',
        },
      ],
    },
    {
      label: 'Group 2',
      name: 'group_2',
      items: [
        {
          label: 'Item 3',
          value: 'item_3',
        },
      ],
    },
  ],
};

const onSelect = (currentSelects) => {
  console.log('Dropdown Select:', currentSelects);
};

const DropDownSelectComponent = () => <DropDownSelect config={settings} onSelect={onSelect} />;

export default DropDownSelectComponent;
