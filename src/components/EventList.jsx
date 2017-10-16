import React from 'react';
import { connect } from 'react-redux';
import Event from './Event.jsx';

function EventList(props) {
  return (
    <div style={containerStyle}>
      {generateEvents()}
    </div>
  );

  function mapStateToProps({ events, searchTerm }) {
    return { events, searchTerm };
  }
  
  export default connect(mapStateToProps)(EventList);
  
  function generateEvents() {
    const { events, searchTerm } = props;
    if (!events) {return};
    
    const filteredEventsByTerm = events.filter(event => {
      const title = event.title.toLowerCase();
      const term = searchTerm.toLowerCase();
      return title.includes(term);
    })
    return filteredEventsByTerm.map(event => <Event data={event} key={event.id} />);
  }
}

const containerStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap', 
  padding: '15px',
  width: '100%',
}
