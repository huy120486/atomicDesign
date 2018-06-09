import React from 'react';
import { Portlet } from '../../react-velonic';

const PortletComponent = () => (
  <div style={{ margin: 50 }}>
    <Portlet
      title="Portlet Demo"
      closeable
      onClickRefresh={() => { console.log('refresh clicked'); }}
      onClickClose={() => { console.log('close clicked'); }}
      onClickMinimize={() => { console.log('minimize clicked'); }}
    >
      <div>
        Hello world
      </div>
    </Portlet>
  </div>
);

export default PortletComponent;
