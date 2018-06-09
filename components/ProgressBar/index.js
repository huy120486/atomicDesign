import React from 'react';
import { ProgressBar } from '../../react-velonic';

const ProgressBarComponent = () => (
  <div style={{ margin: 50 }}>
    <ProgressBar
      percentage={0.3}
      active
      striped
      animated
      style={{ margin: 5 }}
    />
    <ProgressBar
      percentage={0.7}
      progressType="success"
      active
      animated
      style={{ margin: 5 }}
    />
    <ProgressBar
      percentage={0.2}
      progressType="info"
      striped
      style={{ margin: 5 }}
    />
    <ProgressBar
      percentage={0.8}
      progressType="warning"
      active
      striped
      animated
      style={{ margin: 5 }}
    />
    <ProgressBar
      className="process-bar"
      percentage={0.1}
      progressType="danger"
      active
      striped
      animated
      style={{ margin: 5 }}
    />
  </div>
);

export default ProgressBarComponent;
