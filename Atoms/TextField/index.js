import React from 'react';
import {
  TextField,
  FlatButton,
  DropdownButton,
  getVelonicClassName,
} from '../../react-velonic';

const InputGroupButton = () => (
  <FlatButton
    label="Hours"
    type="info"
    style={{ padding: '6px 10px' }}
  />
);

const options = [
  { value: 'one', label: 'One', icon: 'ui-1_edit-74', iconType: 'glyph', style: { cursor: 'pointer' } },
  { value: 'two', label: 'Two', icon: 'ui-1_trash', iconType: 'glyph', style: { color: 'red' } },
  { divider: true },
  { value: 'three', label: 'Three', icon: 'ui-1_trash', iconType: 'glyph', style: { color: 'red' } },
];

const TextFieldComponent = () => (
  <form style={{ margin: 10 }}>
    <TextField
      label="password"
      placeholder="password"
      type="password"
    />
    <TextField
      stateType="warning"
      multiline
    />
    <TextField
      defaultValue="default"
      hasError
      autoFocus
    />
    <TextField
      autoFocus
      leftIcon="nature_butterfly"
      rightIcon="nature_butterfly"
      value="ueue"
      disabled
    />
    <TextField
      defaultValue="default"
      stateType="success"
      leftIcon="ui-1_zoom"
      rightIcon="nature_butterfly"
      helpText="Sida"
      onLeftIconClick={value => console.log('click', value)}
    />
    <div>
      <TextField
        autoFocus
        value="ueue"
        label="error"
        errorMessage="Hello world"
        errorStyles={{ fontSize: '10px' }}
        helpText="Sida"
      />
    </div>

    <p>Group Inputs</p>
    <TextField
      defaultValue="Input Group Left"
      addonClassName={getVelonicClassName('input-group-btn')}
      leftAddon={<InputGroupButton />}
    />
    <TextField
      defaultValue="Input Group Right"
      addonClassName={getVelonicClassName('input-group-btn')}
      rightAddon={<InputGroupButton />}
    />
    <TextField
      defaultValue="Input Group Right"
      addonClassName={getVelonicClassName('input-group-addon')}
      rightAddon={<span>Hours</span>}
    />
    <TextField
      defaultValue="Input Group Right"
      addonClassName={getVelonicClassName('input-group-btn')}
      rightAddon={
        <DropdownButton
          type="success"
          label="Google"
          options={options}
          style={{ padding: '6px 10px' }}
        />
      }
    />
  </form>
);


export default TextFieldComponent;
