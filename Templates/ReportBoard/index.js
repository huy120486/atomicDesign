import React from 'react';
import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import compose from 'recompose/compose';
import get from 'lodash/fp/get';

import { ReportBoard, FlatButton, EhCheckbox } from '../../react-velonic';
import ActionsCell from './ActionsCell';
import ContractForm from './ContractForm';

const statusFilterSetting = {
  name: 'Filter',
  options: {
    selectAll: true,
  },
  data: [
    {
      label: 'Employee Status',
      name: 'employee_status',
      items: [
        {
          label: 'Offboard',
          value: 'offboard',
        },
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Terminated',
          value: 'terminated',
        },
      ],
    },
    {
      label: 'Document Status',
      name: 'document_status',
      items: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Approve',
          value: 'approve',
        },
      ],
    },
  ],
};

const LeftCustom = () => (
  <div style={{ display: 'flex' }}>
    <FlatButton
      type="primary"
      label="Left Custom"
      size="md"
      style={{ marginTop: 0 }}
      onClick={() => {
        console.log('Do something');
      }}
      block
      custom
    />
  </div>
);

const RightCustom = ({ rightCustomValue }) => (
  <div style={{ paddingTop: 6 }}>
    <EhCheckbox
      id="checkbox1"
      label="Right Custom"
      value={rightCustomValue}
      onChange={(e, newValues) => {
        console.log(newValues);
      }}
    />
  </div>
);

const DemoReportBoard = ({
  data,
  loading,
  fetchData,
  onNewSubmit,
  onEditSubmit,
  onDeleteSubmit,
  transformRowDataToInitValue,
  isOpenNewModal,
  setIsOpenNewModal,
}) => (
  <ReportBoard
    loading={loading}
    data={data}
    fetchData={fetchData}
    statusFilterSetting={statusFilterSetting}
    downloadCsvUrl="#"
    LeftCustom={LeftCustom}
    RightCustom={RightCustom}
    isOpenNewModal={isOpenNewModal}
    setOpenNewModal={setIsOpenNewModal}
    onNewSubmit={onNewSubmit}
    onEditSubmit={onEditSubmit}
    onDeleteSubmit={onDeleteSubmit}
    ModalFields={ContractForm}
    transformRowDataToInitValue={transformRowDataToInitValue}
    columns={[
      { header: 'Name', accessor: 'name', sortable: true, searchable: true },
      { header: 'Title', accessor: 'contract_type.title', sortable: true },
      {
        header: 'Actions',
        Cell: ActionsCell,
        width: 200,
      },
    ]}
    isForAdmin
    newButtonLabel="Create new contract"
  />
);

const initialState = {
  total_pages: 11,
  page_index: 1,
  status_filter: {
    document_status: ['pending', 'approve'],
  },
  sort: 'name',
  items: [
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
};

const mapStateToProps = () => ({
  loading: false,
});

const mapDispatchToProps = () => ({
  onNewSubmit: params => console.log('onNewSubmit', params),
  onEditSubmit: params => console.log('onEditSubmit', params),
  onDeleteSubmit: params => console.log('onDeleteSubmit', params),
});

const enhance = compose(
  withState('data', 'updateMetadata', initialState),
  connect(mapStateToProps, mapDispatchToProps),
  withState('isOpenNewModal', 'setIsOpenNewModal', false),
  withState('rightCustomValue', 'setRightCustom', false),
  withHandlers({
    fetchData: ({ updateMetadata }) => (params) => {
      console.log('Params:', params);
      updateMetadata(params);
    },
    transformRowDataToInitValue: () => (rowData = {}) => ({
      ...rowData,
      contract_type_id: get('contract_type.id')(rowData),
      organisation_id: get('organisation.id')(rowData),
    }),
  })
);

export default enhance(DemoReportBoard);
