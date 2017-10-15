import React from 'react';
import Radium from 'radium';

function Switch(props) {
  const { attending, toggle} = props;
  const buttonText = attending ? 'Attending' : 'Not Attending';
  const buttonStyle = attending ? attendingStyle : notAttendingStyle;
  return (
    <button style={buttonStyle} onClick={() => toggle()}>{buttonText}</button>
  );    
}

const attendingStyle = {
  marginLeft: '30px',
  fontFamily: 'Arial',
  color: '#ffffff',
  fontSize: '15px',
  background: '#3dd28d',
  padding: '10px 20px 10px 20px',
  border: '1px solid black',
  cursor: 'pointer',
  width: '140px',
  outlineWidth: 0  
}

const notAttendingStyle = {
  marginLeft: '30px',
  fontFamily: 'Arial',
  fontSize: '15px',
  padding: '10px 20px 10px 20px',
  border: '1px solid black',
  cursor: 'pointer',
  width: '140px',
  outlineWidth: 0,
  ':hover': {

  } ,
}

export default Radium(Switch);
