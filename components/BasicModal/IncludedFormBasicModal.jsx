import React from 'react';
import { Field } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { BasicModal, FlatButton } from '../../react-velonic';
import withModalState from './withModalState';

const enhanceBody = compose(
  lifecycle({
    componentWillReceiveProps(next) {
      console.log('halo3', next);
    },
    componentWillMount() {
      console.log('halo1');
    },
    componentDidMount() {
      console.log('halo');
    },
    componentWillUnMount() {
      console.log('halo3');
    },
  })
);

const Body = () => (
  <div>
    <p>This is an included form modal</p>
    <Field
      name="demoField"
      component="input"
      type="text"
      placeholder="Demo field"
    />
  </div>
);

const NewBody = enhanceBody(Body);

const Footer = ({ onRequestClose, handleSubmit }) => (
  <div>
    <FlatButton
      type="info"
      onClick={handleSubmit}
      style={{ marginRight: '10px' }}
    >
      Ok
    </FlatButton>
    <FlatButton onClick={onRequestClose}>Cancel</FlatButton>
  </div>
);

const FORM_CONFIG = {
  form: 'ModalForm',
  // eslint-disable-next-line no-console
  onSubmit: data => console.log('Submitting:', data),
};

const IncludedFormBasicModal = ({ open, onRequestClose }) => (
  <BasicModal
    title="Customsed modal demo"
    effectName="fadeAndScale"
    onRequestClose={onRequestClose}
    style={{
      width: '90%',
    }}
    open={open}
    Body={NewBody}
    Footer={Footer}
    includedForm
    formConfig={FORM_CONFIG}
  />
);

export default withModalState(IncludedFormBasicModal);
