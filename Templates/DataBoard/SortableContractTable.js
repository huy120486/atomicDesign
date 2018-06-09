import React from 'react';
import {
  connect,
} from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import compose from 'recompose/compose';
import get from 'lodash/fp/get';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';

import { DataBoard } from '../../react-velonic';
import ActionsCell from './ActionsCell';
import ContractForm from './ContractForm';

const SortableContractTable = ({
  data,
  loading,
  totalPages,
  pageIndex,
  fetchData,
  onNewSubmit,
  onEditSubmit,
  onDeleteSubmit,
  sortedBy,
  transformRowDataToInitValue,
  striped = false,
}) => (
  <DataBoard
    modelName="Contract Test"
    loading={loading}
    totalPages={totalPages}
    pageIndex={pageIndex}
    fetchData={fetchData}
    onNewSubmit={onNewSubmit}
    onEditSubmit={onEditSubmit}
    onDeleteSubmit={onDeleteSubmit}
    ModalFields={ContractForm}
    data={data}
    sortedBy={sortedBy}
    transformRowDataToInitValue={transformRowDataToInitValue}
    columns={[
      { header: 'Name', accessor: 'name', sortable: true },
      { header: 'Title', accessor: 'contract_type.title', sortable: true },
      {
        header: 'Actions',
        Cell: ActionsCell,
        width: 200,
      },
    ]}
    isForAdmin
    newButtonLabel="Create new contract"
    striped={striped}
  />
  );

const mapStateToProps = () => ({
  data: [
    {
      id: 12351235,
      name: 'Employee contract template',
      display_title: true,
      contract_type: {
        id: 1234,
        title: 'Policy',
      },
      is_premium: false,
      alt_name: 'Employee super contract template',
      organisation: {
        id: 1234,
        name: 'Employment Hero',
      },
      country: 'AU',
      content: '<div class="cke_block">Hello world</div>',
    },
    {
      id: 12351236,
      name: 'Employee contract template 1',
      display_title: true,
      contract_type: {
        id: 12351235,
        title: 'Policy',
      },
      is_premium: true,
      alt_name: 'Employee super contract template 2',
      organisation: {
        id: 1234,
        name: 'Employment Hero',
      },
      country: 'GB',
      content: '<div class="cke_block">Hello world</div>',
    },
  ],
  loading: false,
  totalPages: 29,
  pageIndex: 3,
});

const mapDispatchToProps = () => ({
  fetchData: params => console.log('fetchData', params),
  onNewSubmit: params => console.log('onNewSubmit', params),
  onEditSubmit: params => console.log('onEditSubmit', params),
  onDeleteSubmit: params => console.log('onDeleteSubmit', params),
});

const enhance = compose(
  withState('sortedBy', 'updateSortby', '-name'),
  connect(mapStateToProps, mapDispatchToProps),
  withProps(({
    fetchData,
    updateSortby,
  }) => ({
    fetchData: (params) => {
      const sortedBy = params.sort ? params.sort : undefined;
      updateSortby(sortedBy);
      fetchData(params);
    },
  })),
  withHandlers({
    transformRowDataToInitValue: () => (rowData = {}) => ({
      ...rowData,
      contract_type_id: get('contract_type.id')(rowData),
      organisation_id: get('organisation.id')(rowData),
    }),
  }),
);

export default enhance(SortableContractTable);
