import React from 'react';
import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import compose from 'recompose/compose';
import get from 'lodash/fp/get';

import { DataBoard } from '../../react-velonic';
import ActionsCell from './ActionsCell';
import ContractForm from './ContractForm';

const ContractTable = ({
  data,
  loading,
  totalPages,
  pageIndex,
  fetchData,
  onNewSubmit,
  onEditSubmit,
  onDeleteSubmit,
  transformRowDataToInitValue,
  striped = false,
  isOpenNewModal,
  setIsOpenNewModal,
}) => (
  <DataBoard
    modelName="Highlight Contract Test"
    loading={loading}
    totalPages={totalPages}
    pageIndex={pageIndex}
    fetchData={fetchData}
    isOpenNewModal={isOpenNewModal}
    setOpenNewModal={setIsOpenNewModal}
    onNewSubmit={onNewSubmit}
    onEditSubmit={onEditSubmit}
    onDeleteSubmit={onDeleteSubmit}
    ModalFields={ContractForm}
    data={data}
    transformRowDataToInitValue={transformRowDataToInitValue}
    columns={[
      { header: 'Name', accessor: 'name', searchable: true },
      { header: 'Title', accessor: 'contract_type.title' },
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
  connect(mapStateToProps, mapDispatchToProps),
  withState('isOpenNewModal', 'setIsOpenNewModal', false),
  withHandlers({
    transformRowDataToInitValue: () => (rowData = {}) => ({
      ...rowData,
      contract_type_id: get('contract_type.id')(rowData),
      organisation_id: get('organisation.id')(rowData),
    }),
  })
);

export default enhance(ContractTable);
