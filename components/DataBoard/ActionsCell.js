import React from 'react';
import {
  LinkButton,
} from '../../react-velonic';

const ActionsCell = ({ rowData, openEditModal, openDeleteModal }) => (
  <span>
    <LinkButton
      type="primary"
      size="xs"
      leftIcon="ui-1_edit-71"
      onClick={() => {
        openEditModal(rowData);
      }}
      velonicClassName="m-r-10"
    >
      Edit
    </LinkButton>

    <LinkButton
      type="danger"
      size="xs"
      leftIcon="ui-1_edit-71"
      onClick={() => {
        openDeleteModal(rowData);
      }}
    >
      Delete
    </LinkButton>
  </span>
);

export default ActionsCell;
