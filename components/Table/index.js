import React from 'react';
import { Table, SortedTable } from '../../react-velonic';

const COLUMNS = [
  'Name',
  'Team',
];

const DATA = [
  ['Hung', 'ANZ'],
  ['Vinh', 'ANZ'],
  ['Hieu', 'Support'],
  ['Thu', 'Support'],
];

const SORT_KEYS = [
  'Name',
  false,
];

const TableComponent = () => (
  <div style={{ margin: 100 }}>
    <h3>Table</h3>
    <Table
      columns={COLUMNS}
      data={DATA}
    />
    <br />
    <h3>Striped Table</h3>
    <Table
      columns={COLUMNS}
      data={DATA}
      striped
    />
    <br />
    <h3>Sorted Table</h3>
    <SortedTable
      columns={COLUMNS}
      data={DATA}
      sortKeys={SORT_KEYS}
      onChange={(newSortBy) => { console.log(newSortBy); }}
      striped
      asc
    />
  </div>
);

export default TableComponent;
