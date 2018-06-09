import React from 'react';
import { TagInput } from '../../react-velonic';

const TagInputComp = () => (
  <div style={{ margin: 50 }}>
    <TagInput
      id="tag-input"
      label="Tag Input"
      value={['Tag 1']}
      onChange={value => console.log(value)}
      error="abc"
      inputProps={{ placeholder: 'Type and enter to add option' }}
    />
  </div>
);

export default TagInputComp;
