import React from 'react';
import { Panel } from '../../react-velonic';

const CustomTitle = () => (
  <span>
    <span style={{ textAlign: 'left' }}>
      <i
        className="nc-icon-mini design_path-exclude"
        style={{ paddingRight: '5px' }}
      />
      Company Setup
    </span>
    <span style={{ float: 'right' }}>1 of 4</span>
  </span>
);

const PanelComponent = () => (
  <div style={{ margin: '50px' }}>
    <Panel title="Employment Hero" />
    <br />
    <Panel title="Primary Panel" type="primary" />
    <br />
    <Panel title="Info Panel" type="info" />
    <br />
    <Panel title="Warning Panel" type="warning" />
    <br />
    <Panel title="Danger Panel" type="danger" />
    <br />

    <Panel
      title={<CustomTitle />}
      type="danger"
      titleTextAlign="left"
    />
  </div>
);

export default PanelComponent;
