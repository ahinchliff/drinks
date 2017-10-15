import React from 'react';
import { withRouter } from 'react-router-dom';
import Radium from 'radium';
import beerBackground from '../assets/beer-icon-background.png';
import coffeeBackground from '../assets/coffee-icon-background.png';
import cocktailBackground from '../assets/cocktail-icon-background.png';
import milkshakeBackground from '../assets/milkshake-icon-background.png';
import commentsIcon from '../assets/comments.png';
import guestsIcon from '../assets/guests.png';

function Event(props) {
  const { id, type, title, guests, comments, attending } = props.data;
  const { history } = props;
  
  
  determineMainBackground(type);
  const guestCount = guests.length;
  const commentCount = comments.length;
  return (
    <div style={containerStyle}>
        <div style={innerStyle} onClick={() => handleOnClick(history, id)}>
          <header style={headerStyle}>
            <p style={{padding: 0, margin: 0}}>{title}</p>
          </header>
          <main style={mainStyle}>
            {attending && <span style={attendingStyle}>Attending</span>}
          </main>
          <footer style={footerStyle}>
            <div style={{marginRight: '30px', display: 'flex', alignItems: 'center'}}>
              <img src={guestsIcon} style={{height: '25px', marginRight: '10px'}} alt={"Guest count"}/>
              {guestCount}
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src={commentsIcon} style={{height: '25px', marginRight: '10px'}} alt={"Comment count"}/>
              {commentCount}
            </div>
          </footer> 
        </div>
    </div>
  );
}

export default withRouter(Radium(Event));

function handleOnClick(history, id) {
  history.push(`/events/${id}`);
}

function determineMainBackground(type) {
  let background;
  switch(type) {
    case "COCKTAILS":
      background = cocktailBackground;
      break
    case "BEERS":
      background = beerBackground;
      break
    case "COFFEES":
      background = coffeeBackground;
      break
    case "MILKSHAKES":
      background = milkshakeBackground;
      break
    default:
      return
  }
  mainStyle.backgroundImage = `url(${background})`
}

const containerStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  padding: '15px',
  '@media (min-width : 321px) and (max-width : 1000px)': {
    width: '50%'
  },
  '@media (min-width : 1001px) and (max-width : 1399px)': {
    width: '33%'
  },
  '@media (min-width : 1400px) and (max-width : 1600px)': {
    width: '25%'
  },
  '@media (min-width : 1601px)': {
    width: '20%'
  },
}

const innerStyle = {
  border: '1px solid #e4e4e4',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: '300px',
  width: '100%',
  position: 'relative',
  ':hover': {
    border: '3px solid black'
  },
  cursor: 'pointer',
}

const headerStyle = {
  background: 'white',
  padding: '10px 0 10px 15px',
  fontFamily: '"Helvetica", sans-serif',
  letterSpacing: '2px',
}

const mainStyle = {
  flexGrow: 1,
  backgroundSize: 'stretch',
  backgroundPosition: 'center',
  padding: '10px',
}

const footerStyle = {
  padding: '10px 0 10px 15px',
  display: 'flex',
  flexDirection: 'row',
}

const attendingStyle = {
  background: 'green',
  color: 'white',
  padding: '5px',
  boxSizing: 'border-box',
  display: 'inline-block',
  float: 'right',
  borderRadius: '4px',
  fontFamily: '"Helvetica", sans-serif',
}

