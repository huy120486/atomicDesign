import React from 'react';

import { BasicModal, FlatButton } from '../../react-velonic';
import withModalState from './withModalState';

const Header = ({ title, onRequestClose }) => (
  <FlatButton onClick={onRequestClose}>{title}</FlatButton>
);

const Body = () => (
  <p>This is a modal demo</p>
);

const Footer = ({ onRequestClose }) => (
  <div>
    <FlatButton
      type="info"
      onClick={onRequestClose}
      style={{ marginRight: '10px' }}
    >
      Ok
    </FlatButton>
    <FlatButton onClick={onRequestClose}>Cancel</FlatButton>
  </div>
);

const CustomisedBasicModal = ({ open, onRequestClose }) => (
  <BasicModal
    title="Customsed modal demo"
    effectName="fadeAndScale"
    onRequestClose={onRequestClose}
    style={{
      width: '90%',
    }}
    open={open}
    Header={Header}
    Body={Body}
    Footer={Footer}
  />
);

export default withModalState(CustomisedBasicModal);
