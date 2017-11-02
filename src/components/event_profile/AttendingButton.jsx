import React from 'react';
import styled, { css } from 'styled-components';

function AttendingButton(props) {
  const { attending, toggle} = props;
  const buttonText = attending ? 'Attending' : 'Not Attending';
  return (
    <StyledButton attending={attending} onClick={() => toggle()}>{buttonText}</StyledButton>
  );    
}

export default AttendingButton;

const StyledButton = styled.button`
  margin-left: 30px;
  font-family: Arial;
  font-size: 15px;
  padding: 10px 20px 10px 20px;
  border: 1px solid black;
  cursor: pointer;
  width: 140px;
  outline-width: 0;
  ${props => props.attending && css`
    background-color: #3dd28d;
    color: #ffffff;
  `}
`;




