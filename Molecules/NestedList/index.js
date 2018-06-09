import React from 'react';
import { NestedList } from '../../react-velonic';

const nodes = [
  {
    id: 1,
    label: ' item 1',
  },
  {
    id: 2,
    label: ' item 2',
    children: [
      {
        id: 3,
        label: ' item 3',
      },
      {
        id: 4,
        label: ' item 4',
      },
      {
        id: 5,
        label: ' item 5',
        children: [
          {
            id: 6,
            label: ' item 6',
          },
          {
            id: 7,
            label: ' item 7',
          },
          {
            id: 8,
            label: ' item 8',
          },
        ],
      },
      {
        id: 9,
        label: ' item 9',
      },
      {
        id: 10,
        label: ' item 10',
      },
    ],
  },
  {
    id: 11,
    label: ' item 11',
  },
  {
    id: 12,
    label: ' item 12',
  },
];

const activatedNodes = [2];

const onChange = (newActivatedNode) => { console.log(newActivatedNode); };

const NestedListComponent = () => (
  <div style={{ margin: 50 }}>
    <NestedList
      nodes={nodes}
      activatedNodes={activatedNodes}
      onChange={onChange}
    />
  </div>
);

export default NestedListComponent;
