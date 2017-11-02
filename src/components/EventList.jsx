import React from 'react';
import { connect } from 'react-redux';
import Event from './Event.jsx';
import styled from 'styled-components';


function EventList(props) {
  const { searchTerm } = props;
  const eventData = props.events || [];

  const filteredEventsByTerm = eventData.filter(event => {
    const title = event.title.toLowerCase();
    const term = searchTerm.toLowerCase();
    return title.includes(term);
  })

  return (
    <Wrapper>
      {filteredEventsByTerm.map(event => <Event data={event} key={event.id} />)}
    </Wrapper>
  );
}

function mapStateToProps({ events, searchTerm }) {
  return { events, searchTerm };
}

export default connect(mapStateToProps)(EventList);

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  width: 100%;
`;