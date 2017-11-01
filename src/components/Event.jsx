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
          {attending && <AttendingTag>Attending</AttendingTag>}
        </Main>
        <Footer>
          <CountContainer>
            <CountIcon src={guestsIcon} alt={"Guest count"}/>
            {guestCount}
          </CountContainer>
          <CountContainer>
            <CountIcon src={commentsIcon} alt={"Comment count"}/>
            {commentCount}
          </CountContainer>
        </Footer> 
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

const Footer = styled.footer`
  padding: 10px 0 10px 15px;
  display: flex;
  flex-direction: row;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

const CountIcon = styled.img`
  height: 25px;
  margin-right: 10px;
`;

const AttendingTag = styled.span`
  background: green;
  color: white;
  padding: 5px;
  box-sizing: border-box;
  display: inline-block;
  float: right;
  border-radius: 4px;
  font-family: "Helvetica", sans-serif;
`;

