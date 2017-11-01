import React from 'react';
import EventList from './EventList';
import styled from 'styled-components';

function Main(props) {
  return (
    <Wrapper>
      <EventList />
    </Wrapper>
  )
}

export default Main;

const Wrapper = styled.div`
  margin-top: 80px;
`