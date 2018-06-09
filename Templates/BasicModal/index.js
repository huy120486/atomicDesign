import React from 'react';
import DefaultBasicModal from './DefaultBasicModal';
import CustomisedBasicModal from './CustomisedBasicModal';
import IncludedFormBasicModal from './IncludedFormBasicModal';
import BasicModalWithClose from './BasicModalWithClose';

const BasicModalComponent = () => (
  <div>
    <DefaultBasicModal toggleButtonTitle="Open default modal" />
    <CustomisedBasicModal toggleButtonTitle="Open customied modal" />
    <IncludedFormBasicModal toggleButtonTitle="Open form modal" />
    <BasicModalWithClose toggleButtonTitle="Open modal with close button" />
  </div>
);

export default BasicModalComponent;
