import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Switch from './Switch.jsx';
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
    <div onClick={() => closeEventProfile(history)} style={overlayStyle}>
      {events && generateProfile(event, toggleAttendingEvent)}
    </div>
  );
}

function mapStateToProps({ events }) {

  return { events };
}

export default connect(mapStateToProps, actions)(EventProfile);






function closeEventProfile(history) {
  history.push("/");
}

function generateProfile(event, toggleAttendingEvent) {
  const { attending, guests, title, location, time, id, comments } = event;
  return (
    <div style={profileStyle} onClick={e => e.stopPropagation()}>
      <div style={headerStyle}>
        <p style={{fontFamily: '"Helvetica", sans-serif', letterSpacing: '2px', fontSize: '25px', margin: 0, padding: 0}}>
          {title} - {new Date(time).toLocaleDateString()}
        </p>
        <Switch attending={attending} toggle={() => toggleAttendingEvent(id)}/>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', paddingTop: '20px'}}>
        <AttendingList attending={guests}/>
        <CommentList comments={comments}/>
        <MapArea location={location}/>
      </div>
    </div>
  );
}


const overlayStyle = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0, 
  left: 0, 
  width: '100%', 
  height: '100vh', 
  background: 'rgba(0, 0, 0, 0.4)', 
  zIndex: '10',
}

const profileStyle = {
  borderRadius: '5px',
  width: '60%', 
  background: 'white',
  padding: '20px',
  height: '70vh'
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',

}


