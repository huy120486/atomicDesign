import React from 'react';
import { SearchField } from '../../react-velonic';

const SearchFieldComponent = () => (
  <div style={{ margin: 10 }}>
    <SearchField
      placeholder="Left icon"
      onSearch={(value) => console.log(value)}
    />

    <SearchField
      placeholder="Right icon"
      searchIconPosition="right"
      onSearch={(value) => console.log(value)}
    />

    <SearchField
      placeholder="no icon"
      searchIconPosition="none"
      onSearch={(value) => console.log(value)}
    />

  </div>
);

export default SearchFieldComponent;
