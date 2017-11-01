import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions';
import styled from 'styled-components';

function SearchBar(props) {
  return (
    <SearchInput type="text" placeholder="search" onChange={handleOnChange}/>
  );

  function handleOnChange(event) {
    props.updateSearchTerm(event.target.value)
  }
}

export default connect(null, actions)(SearchBar);

const SearchInput = styled.input`
  border: none;
  border-radius: 4px;
  color: #4DAB7C;
  font-size: 28px;
  font-family: "Helevetica", sans-serif;
  height: 50px;
  margin-left: 100px;
  outline-width: 0;
`;
