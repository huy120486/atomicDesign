import React from 'react';
import { BasicTable } from '../../react-velonic';

const COLUMNS = [
  { header: 'Component name', accessor: 'name' },
  { header: 'Author', accessor: 'author', width: 200 },
];

const DATA = [
  { name: 'Badge', author: 'Thinh' },
  { name: 'FlatButton', author: 'Khoa' },
  { name: 'UploadButton', author: 'Hieu' },
];

const DefaultBasicTable = () => (
  <div>
    <h3>Default BasicTable</h3>
    <BasicTable
      columns={COLUMNS}
      data={DATA}
      noRowBorder
      loading
    />
  </div>
);

export default DefaultBasicTable;
