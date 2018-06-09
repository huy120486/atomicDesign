import React from 'react';
import { WidgetPanel } from '../../react-velonic';

const WidgetPanelComponent = () => (
  <div style={{ margin: 50 }}>
    <WidgetPanel
      iconType="glyph"
      iconName="design-2_browser-chrome"
      iconColor="info"
      title="Widget Panel"
      titleColor="warning"
      description="Demo"
      details="Additional Info"
    />
    <WidgetPanel
      iconType="glyph"
      iconName="design-2_browser-chrome"
      iconColor="success"
      iconBackgroundColor="white"
      animated
      title="Widget Panel"
      description="Demo"
      descriptionColor="success"
    />
    <WidgetPanel
      iconType="glyph"
      iconName="design-2_browser-chrome"
      iconColor="danger"
      iconBackgroundColor="white"
      infiniteAnimated
      title="Widget Panel"
      description="Demo"
      descriptionColor="danger"
    />
  </div>
);

export default WidgetPanelComponent;
