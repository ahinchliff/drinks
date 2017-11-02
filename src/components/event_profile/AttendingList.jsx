import React from 'react';
import styled from 'styled-components';

function AttendingList(props) {
  const { attending } = props;
  const attendees = attending.map((attendee, index) => {
    return (
      <Attendee key={index}>
        <div>
          <AttendeeAvatar src={attendee.avatarUrl} alt={`${attendee.name}'s profile`} />
          <AttendeeName>{attendee.name}</AttendeeName>
        </div>
      </Attendee>
    );
  });

  return (
    <div>
      <Title>Attending</Title>
      <AttendeeList>{attendees}</AttendeeList>
    </div>
  );
}

export default AttendingList;

const Title = styled.span`
  font-family: "Helvetica", sans-serif;
  font-size: 18px;
`;

const AttendeeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Attendee = styled.li`
  div {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
`;

const AttendeeAvatar = styled.img`
  border-radius: 50%;
  height: 50px;
  max-width: 50px;
  border: 2px solid black;
  margin-right: 10px;
`;

const AttendeeName = styled.span`
  font-weight: bold;
`;