import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import FileList from "./components/FileList";
import readFile from "./utils/readFile";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const canReadFile =
  window.File && window.FileReader && window.FileList && window.Blob;

function App() {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [files, setFiles] = useState([]);

  const addFile = async e => {
    const newFiles = [];

    for (const file of e.target.files) {
      const dataUrl = await readFile(file);
      newFiles.push({
        name: file.name,
        dataUrl
      });
    }
    setFiles([...files, ...newFiles]);
    setCurrentFile("");
  };

  return (
    <Container>
      <h1>SVG to PNG Converter</h1>

      {canReadFile && (
        <>
          <Row>
            <Col>
              <input
                type="file"
                value={currentFile}
                onChange={addFile}
                accept=".svg"
                multiple
              />
            </Col>
            <Col md="4"></Col>
          </Row>
          <Row>
            <Col md="4">
              <h3>Files</h3>
              <FileList value={files} />
            </Col>
            <Col md="4"></Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default App;
