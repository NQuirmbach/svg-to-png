import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import SvgDisplay from './SvgDisplay';

const FileList = ({ value, onDelete }) => {
  return (
    <List className="list-unstyled">
      {value.map((f, i) => (
        <li key={i}>
          <Title>
            <Name>{f.name}</Name>
            <Icon onClick={() => onDelete(f)} className="fa fa-times" />
          </Title>
          <Row>
            <Col xs="4">
              <SvgDisplay scale={1} dataUrl={f.dataUrl} />
            </Col>
            <Col xs="4">
              <SvgDisplay scale={2} dataUrl={f.dataUrl} />
            </Col>
            <Col xs="4">
              <SvgDisplay scale={3} dataUrl={f.dataUrl} />
            </Col>
          </Row>
        </li>
      ))}
    </List>
  );
};
FileList.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      dataUrl: PropTypes.string,
    }).isRequired,
  ),
  onDelete: PropTypes.func.isRequired,
};

const List = styled.ul`
  & > li {
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-bottom: 1px solid #ccc;    
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const Name = styled.span`
  font-weight: 600;
  flex: 1;
`;
const Icon = styled.i`
  color: red;
  cursor: pointer;
`;

export default FileList;
