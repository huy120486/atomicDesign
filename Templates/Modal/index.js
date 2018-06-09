import React from 'react';
import { Modal } from '../../react-velonic';

const noop = () => {};

const ModalComponent = () => (
  <Modal
    title="Modal Demo"
    effectName="fadeAndScale"
    onRequestClose={noop}
    buttons={[
      { label: 'Delete', type: 'primary', onClick: noop },
      { label: 'Cancel', type: 'default', onClick: noop },
    ]}
    style={{
      width: '90%',
    }}
    footerStyle={{
      padding: 12,
      position: 'absolute',
      bottom: 0,
      background: '#fff',
      width: '100%',
      left: 0,
      marginLeft: 0,
    }}
    contentStyle={{
      maxHeight: 500,
      overflow: 'auto',
      paddingBottom: 64,
    }}
    open
  >
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
  </Modal>
);

export default ModalComponent;
