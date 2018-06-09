import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '../../react-velonic';

const BreadcrumbComponent = () => (
  <Breadcrumb>
    <BreadcrumbItem href="www.google.com">
      Home
    </BreadcrumbItem>
    <BreadcrumbItem>
      Cant click
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Active
    </BreadcrumbItem>
  </Breadcrumb>
);

export default BreadcrumbComponent;
