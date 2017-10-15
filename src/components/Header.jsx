import React from 'react';
import SearchBar from './SearchBar.jsx';

import drinkLogo from '../assets/drinks-text.png';

const containerStyle = {
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  flexDirection: 'row',
  background: 'white',
  alignItems: 'center',
  height: '80px',
  paddingLeft: '50px',
  borderBottom: '1px solid #e4e4e4',
  boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  zIndex: 9,
}



function Header(props) {
  return (
    <div style={containerStyle}>
      <img src={drinkLogo} style={{height: '50px'}} alt={"Drinks Logo"}/>
      <SearchBar />
    </div>
  )
}

export default Header;