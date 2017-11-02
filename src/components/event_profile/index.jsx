import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AttendingButton from './AttendingButton.jsx';
import AttendingList from './AttendingList';
import CommentList from './CommentList';
import MapArea from './MapArea';

function EventProfile(props) {
  const { history, events, toggleAttendingEvent } = props;
  const eventId = +(props.match.params.id);
  let event;
  
  if (events) {
    event = (events.filter(event => event.id === eventId))[0]
  }

  return (
    <Overlay onClick={() => history.push("/")}>
      {events && generateProfile(event, toggleAttendingEvent)}
    </Overlay>
  );
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, actions)(EventProfile);


function generateProfile(event, toggleAttendingEvent) {
  const { attending, guests, title, location, time, id, comments } = event;
  const date = new Date(time).toLocaleDateString()

  return (
    <Modal onClick={e => e.stopPropagation()}>
      <Header>
        <p>{title} - {date}</p>
        <AttendingButton attending={attending} toggle={() => toggleAttendingEvent(id)}/>
      </Header>
      <Main>
        <AttendingList attending={guests}/>
        <CommentList comments={comments}/>
        <MapArea location={location}/>
      </Main>
    </Modal>
  );
}

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const Modal = styled.div`
  border-radius: 5px;
  width: 60%;
  background: white;
  padding: 20px;
  height: 70vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  p {
    font-family: "Helvetica", sans-serif;
    letter-spacing: 2px;
    font-size: 25px;
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 20px;
`;



