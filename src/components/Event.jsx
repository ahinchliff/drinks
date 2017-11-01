import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import beerBackground from '../assets/beer-icon-background.png';
import coffeeBackground from '../assets/coffee-icon-background.png';
import cocktailBackground from '../assets/cocktail-icon-background.png';
import milkshakeBackground from '../assets/milkshake-icon-background.png';
import commentsIcon from '../assets/comments.png';
import guestsIcon from '../assets/guests.png';

function Event(props) {
  const { id, type, title, guests, comments, attending } = props.data;
  const { history } = props;
  const guestCount = guests.length;
  const commentCount = comments.length;

  return (
    <Wrapper>
      <EventClickable onClick={() => handleOnClick(history, id)}>
        <Header>
          <p>{title}</p>
        </Header>
        <Main type={type}>
          {attending && <span style={attendingStyle}>Attending</span>}
        </Main>
        
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
      </EventClickable>
    </Wrapper>
  );
}

export default withRouter(Event);

function handleOnClick(history, id) {
  history.push(`/events/${id}`);
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 15px;
  @media (min-width : 321px) and (max-width : 1000px) {
    width: 50%;
  }
  @media (min-width : 1001px) and (max-width : 1399px) {
    width: 33%;
  }
  @media (min-width : 1400px) and (max-width : 1600px) {
    width: 25%;
  }
  @media (min-width : 1601px) {
    width: 20%;
  }
`;

const EventClickable = styled.div`
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  position: relative;
  cursor: pointer;
  &:hover { border: 3px solid black; }
`;

const Header = styled.div`
  background: white;
  padding: 10px 0 10px 15px;
  font-family: "Helvetica", sans-serif;
  letter-spacing: 2px;
  p {
    padding: 0;
    margin: 0;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  background-size: stretch;
  background-position: center;
  padding: 10px;
  background-image: url(${
    props => {
      if (props.type === 'COCKTAILS') {return cocktailBackground}
      if (props.type === 'BEERS') {return beerBackground}
      if (props.type === 'COFFEES') {return coffeeBackground}
      if (props.type === 'MILKSHAKES') {return milkshakeBackground}
    }
  });
`;

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

