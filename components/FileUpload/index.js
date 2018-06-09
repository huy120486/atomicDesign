/* global filepicker */
import React from 'react';
import { FileUpload } from '../../react-velonic';

const inputFiles = [{ url: 'http://1', filename: 'Example File' }];

const pickOptions = {
  extensions: [
    '.png',
    '.jpg',
    '.jpeg',
    '.pdf',
    '.doc',
    '.docx',
  ],
};

const noop = () => {};

// filepicker.setKey('AcOlkLPXbQY2cfSeySuEBz');

const FileUploadComponent = () => (
  <FileUpload
    files={inputFiles}
    label="Upload"
    maxFiles={5}
    onChange={(newFiles) => { console.log(newFiles); }}
    onUploadFailed={noop}
    pickOptions={pickOptions}
    policy="uploading_policy"
    signature="uploading_signature"
  />
);

export default FileUploadComponent;
