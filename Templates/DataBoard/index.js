import React from 'react';

import ContractTable from './ContractTable';
import CustomizedContractTable from './CustomizedContractTable';
import SortableContractTable from './SortableContractTable';
import HighlightContractTable from './HighlightContractTable';

const DemoDataboard = () => (
  <div>
    <label htmlFor="contract-table">Contract Table</label>
    <ContractTable id="contract-table" />

    <label htmlFor="contract-table">Text Highlight Contract Table</label>
    <HighlightContractTable id="contract-table" />

    <label htmlFor="customized-table">
      Customized table with borders and customized entries per page options
    </label>
    <CustomizedContractTable id="customized-table" />

    <label htmlFor="striped-customized-table">Striped table</label>
    <CustomizedContractTable id="striped-customized-table" striped />

    <label htmlFor="sortable-table">Sortable table</label>
    <SortableContractTable id="sortable-table" striped />
  </div>
);

export default DemoDataboard;
