import React from 'react';
import { Paginator } from '../../react-velonic';

const PaginatorDoc = () => (
  <Paginator
    totalPages={10}
    currentPage={1}
    onPaginationChange={(e) => { console.log('Change', e); }}
  />
);

export default PaginatorDoc;
