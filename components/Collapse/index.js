import React from 'react';
import {
  compose,
  withState,
} from 'recompose';
import {
  Collapse,
  FlatButton,
} from '../../react-velonic';

const CollapseWrapper = ({
  isCollapseOpen,
  setIsCollapseOpen,
  height,
  setHeight,
}) => (
  <div style={{ margin: '50px', padding: '10px', border: '1px solid' }}>
    <FlatButton
      label="Show/Hide content"
      style={{ marginBottom: '10px' }}
      onClick={() => setIsCollapseOpen(!isCollapseOpen)}
    />
    <div>
      <label htmlFor="content-height">
        Content height:
        <input
          id="content-height"
          type="range"
          value={height}
          min={0}
          max={500}
          step={50}
          onChange={e => setHeight(e.target.value)}
        />
      </label>
    </div>
    <Collapse
      isOpened={isCollapseOpen}
      className="collapse-wrapper"
    >
      <p style={{ height, backgroundColor: '#333333' }} />
    </Collapse>
  </div>
);

const enhance = compose(
  withState('isCollapseOpen', 'setIsCollapseOpen', false),
  withState('height', 'setHeight', 100),
);

export default enhance(CollapseWrapper);
