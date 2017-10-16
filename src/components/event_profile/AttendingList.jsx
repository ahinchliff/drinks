import React from 'react';

function AttendingList(props) {
  return (
    <div>
      <span style={{fontFamily: '"Helvetica", sans-serif', fontSize: '18px'}}>Attending</span>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0,}}>
        {generateAttendees(props.attending)}
      </ul>
    </div>
  );
}

export default AttendingList;

function generateAttendees(list) {
  return list.map((attendee, index) => {
    return (
      <li key={index}>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px'  }}>
          <img src={attendee.avatarUrl} alt={`${attendee.name}'s profile`} style={imageStyle}/>
          <span style={{fontWeight: 'bold'}}>{attendee.name}</span>
        </div>
      </li>
    );
  })
}

const imageStyle = {
  borderRadius: '50%',
  height: '50px',
  maxWidth: '50px',
  border: '2px solid black',
  marginRight: '10px',
};