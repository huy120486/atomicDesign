import React from 'react';
import { compose, lifecycle } from 'recompose';
import { BasicModal, ScrollBar } from '../../react-velonic';
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
  <ScrollBar
    autoHeight
    autoHeightMax={300}
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
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
    <p>This is a modal demo</p>
  </ScrollBar>
);

const NewBody = enhanceBody(Body);

const DefaultBasicModal = ({ open, onRequestClose }) => (
  <BasicModal
    title="Modal Demo"
    effectName="fadeAndScale"
    onRequestClose={onRequestClose}
    style={{
      width: '90%',
    }}
    open={open}
    Body={NewBody}
    showCloseButton
  />
);


export default withModalState(DefaultBasicModal);
