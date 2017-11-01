import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar.jsx';
import drinkLogo from '../assets/drinks-text.png';

function Header(props) {
  return (
    <Wrapper>
      <Logo src={drinkLogo} alt={"Drinks Logo"}/>
      <SearchBar />
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
  align-items: center;
  background: white;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 80px;
  left: 0;
  padding-left: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  zIndex: 9;
`;

const Logo = styled.img`
  height: 50px;
`;