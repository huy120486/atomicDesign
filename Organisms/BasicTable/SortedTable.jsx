import React from 'react';
import withState from 'recompose/withState';
import { SortableTable } from '../../react-velonic';

const DATA = [
  { name: 'Badge', author: 'Thinh' },
  { name: 'FlatButton', author: 'Khoa' },
  { name: 'ProgressBar', author: 'Hieu' },
];

const COLUMNS_WITH_CELL_RENDERER = [
  { header: 'Component name', accessor: 'name', sortable: true },
  { header: 'Author', accessor: 'author', sortable: true },
  { header: 'Actions', accessor: '' },
];

const SortableTableWithState = ({
  sortedBy,
  updateSortby,
}) => (
  <div>
    <h3>SortableTable</h3>

    <SortableTable
      columns={COLUMNS_WITH_CELL_RENDERER}
      data={DATA}
      sortedBy={sortedBy}
      onSort={updateSortby}
      additionalRowData={{
        text: 'em ne',
      }}
    />
  </div>
);

const enhance = withState('sortedBy', 'updateSortby', '-name');

export default enhance(SortableTableWithState);
