import React from 'react';
import withState from 'recompose/withState';
import compose from 'recompose/compose';

import { FlatButton } from '../../react-velonic';

const wrapWithModalState = withState('open', 'setOpenState', false);

const wrapWithOpenButton = Component => ({
  toggleButtonTitle,
  setOpenState,
  ...others
}) => (
  <div>
    <FlatButton
      onClick={() => setOpenState(true)}
    >
      {toggleButtonTitle}
    </FlatButton>
    <Component
      onRequestClose={() => setOpenState(false)}
      {...others}
    />
  </div>
);

export default compose(wrapWithModalState, wrapWithOpenButton);
