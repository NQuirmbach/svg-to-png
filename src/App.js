import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import FileList from './components/FileList';
import readFile from './utils/readFile';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';

const canReadFile =
  window.File && window.FileReader && window.FileList && window.Blob;

function App() {
  const [files, setFiles] = useState([]);

  const addFile = async ({ target }) => {
    const newFiles = [];

    for (const file of target.files) {
      const dataUrl = await readFile(file);
      newFiles.push({
        name: file.name,
        dataUrl,
      });
    }
    setFiles([...files, ...newFiles]);

    target.type = '';
    target.type = 'file';
  };
  const deleteFile = file => {
    const temp = [...files];
    temp.splice(files.indexOf(file), 1);

    setFiles(temp);
  };

  return (
    <>
      <Header>
        <Container>
          <h2>SVG to PNG Converter</h2>
        </Container>
      </Header>
      <Content>
        <Container>
          {canReadFile && (
            <>
              <div>
                <input type="file" onChange={addFile} accept=".svg" multiple />
              </div>
              <div>
                <FileList value={files} onDelete={deleteFile} />
              </div>
            </>
          )}
        </Container>
      </Content>
    </>
  );
}

const Header = styled.header`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
`;
const Content = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
`;

export default App;
