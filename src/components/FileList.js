import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FileList = ({ value }) => {
  return (
    <List className="list-unstyled">
      {value.map((f, i) => (
        <li key={i}>
          <Name>{f.name}</Name>
          
        </li>
      ))}
    </List>
  )
}
FileList.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string)
}

const List = styled.ul`
  & > li {
    padding: 15px;
    border: 1px solid #ccc;
    border-bottom: 0 none;

    &:first-of-type {
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }

    &:last-of-type {
      border-bottom: 1px solid #ccc;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
`
const Name = styled.span`
  flex: 1;
`

export default FileList

