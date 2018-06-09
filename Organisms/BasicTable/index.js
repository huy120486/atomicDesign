import React from 'react';
import DefaultBasicTable from './DefaultBasicTable';
import BasicTableWithCustomisedCells from './BasicTableWithCustomisedCells';
import BasicTableWithInlineEditable from './BasicTableWithInlineEditable';
import SortableTable from './SortedTable';

const BasicTableComponent = () => (
  <div style={{ margin: 100 }}>
    <DefaultBasicTable />
    <SortableTable />
    <BasicTableWithCustomisedCells />
    <BasicTableWithInlineEditable />
  </div>
);

export default BasicTableComponent;
