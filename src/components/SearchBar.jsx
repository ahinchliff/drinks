import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions';

function SearchBar(props) {
  return (
    <input 
      style={style}
      type="text"
      placeholder="search"
      onChange={handleOnChange}
    />
  );

  function handleOnChange(event) {
    props.updateSearchTerm(event.target.value)
  }
}

export default connect(null, actions)(SearchBar);

const style = {
  border: 'none',
  fontSize: '28px',
  fontFamily: '"Helvetica", sans-serif',
  color: '#4DAB7C',
  borderRadius: '4px',
  height: '50px',
  marginLeft: '100px',
  outlineWidth: 0,
}