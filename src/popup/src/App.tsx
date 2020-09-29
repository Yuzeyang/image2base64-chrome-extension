import React from 'react';
import './App.css';
import { Upload, message, Button } from 'antd';
import 'antd/dist/antd.css';
import { InboxOutlined, SyncOutlined } from '@ant-design/icons';
// const imageToBase64 = require('image-to-base64');

function App() {
  const { Dragger } = Upload;
  let imageBase64Data = '';
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="App">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
      <textarea className="text-area" placeholder={'here is image base64 data'} rows={5}>{imageBase64Data}</textarea>
      <Button className="transform-button" type="primary" shape="round" icon={<SyncOutlined />} size={'large'}>
        Transform
      </Button>
    </div>
  );
}

export default App;
