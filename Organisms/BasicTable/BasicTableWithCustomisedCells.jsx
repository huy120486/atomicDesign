import React from 'react';
import { BasicTable, FlatButton } from '../../react-velonic';

const CustomisedCell = ({ value }) => (
  <span
    style={{
      borderRadius: '10px',
      backgroundColor: 'orange',
      color: 'white',
      padding: '5px',
    }}
  >
    {value}
  </span>
);

// eslint-disable-next-line no-console
const logData = console.log;

const ActionsCell = ({ rowData, text }) => (
  <span>
    <FlatButton
      type="primary"
      size="xs"
      style={{ marginRight: '5px' }}
      onClick={() => logData('Clicked on edit:', rowData)}
    >
      Edit {text}
    </FlatButton>
    <FlatButton
      type="danger"
      size="xs"
      onClick={() => logData('Clicked on delete:', rowData)}
    >
      Delete
    </FlatButton>
  </span>
);

const DATA = [
  { name: 'Badge', author: 'Thinh' },
  { name: 'FlatButton', author: 'Khoa' },
  { name: 'ProgressBar', author: 'Hieu' },
];

const COLUMNS_WITH_CELL_RENDERER = [
  { header: 'Component name', accessor: 'name' },
  { header: 'Author', accessor: 'author', Cell: CustomisedCell },
  { header: 'Actions', accessor: '', Cell: ActionsCell },
];

const BasicTableWithCustomisedCells = () => (
  <div>
    <h3>BasicTable with customised cells</h3>
    <BasicTable
      columns={COLUMNS_WITH_CELL_RENDERER}
      data={DATA}
      additionalRowData={{
        text: 'em ne',
      }}
    />
  </div>
);

export default BasicTableWithCustomisedCells;
