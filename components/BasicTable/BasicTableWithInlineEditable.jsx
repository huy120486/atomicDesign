import React from 'react';
import {
  BasicTable,
  TextField,
  FlatButton,
  CheckboxGroup,
  fieldWithError,
} from '../../react-velonic';

const TextFieldWithError = fieldWithError(TextField);

const ComponentNameCell = ({ input, meta }) => (
  <TextFieldWithError
    value={input.value}
    onChange={input.onChange}
    hasError={meta.error != null}
    error={meta.error}
  />
);

const ActionsCell = ({ handleSubmit }) => (
  <FlatButton type="primary" size="xs" onClick={handleSubmit}>Save</FlatButton>
);

const CHECKBOX_OPTIONS = [
  { label: 'Thinh', value: 'Thinh' },
  { label: 'Khoa', value: 'Khoa' },
  { label: 'Hieu', value: 'Hieu' },
];

const AuthorRenderer = ({ input }) => (
  <CheckboxGroup
    options={CHECKBOX_OPTIONS}
    value={input.value}
    onChange={input.onChange}
    inline
  />
);

const COLUMNS_WITH_INLINE_EDITABLE = [
  { header: 'Component name', accessor: 'name', Cell: ComponentNameCell },
  { header: 'Author', accessor: 'author', Cell: AuthorRenderer },
  { header: 'Actions', accessor: '', Cell: ActionsCell },
];

const DATA = [
  { id: 1, name: 'Badge', author: ['Thinh'] },
  { id: 2, name: 'FlatButton', author: ['Khoa'] },
  { id: 3, name: 'ProgressBar', author: ['Hieu'] },
];

const FORM_CONFIG = {
  validate: ({ name }) => ({
    name: name === '' && "Name can't be blank",
  }),
  // eslint-disable-next-line no-console
  onSubmit: data => console.log('Submitting:', data),
  identifierBy: 'InlineEditableRowForm',
};

const BasicTableWithInlineEditable = () => (
  <div>
    <h3>BasicTable with Inline editable</h3>
    <BasicTable
      inlineEditable
      inlineFormConfig={FORM_CONFIG}
      columns={COLUMNS_WITH_INLINE_EDITABLE}
      data={DATA}
    />
  </div>
);

export default BasicTableWithInlineEditable;
