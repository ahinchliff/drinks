
// retrieve from local storage an array of ids for events the user is attending
const fetchAttendingEventIdsFromLS = () => {
  return JSON.parse(localStorage.getItem("attendingEvents")) || [];
}

// save to local storage an array of ids for events the user is attending
export const setAttendingEventIdsToLS = (eventIds) => {
  return localStorage.setItem("attendingEvents", JSON.stringify(eventIds));
}

// check, by passing in an id, if a user is attending an event
export const isAttendingEvent = (eventId) => {
  const attendingIds = fetchAttendingEventIdsFromLS();
  return attendingIds.indexOf(eventId) > -1;
}

// given an event id, inverse if a user is attending or not and save
// the updated attending array to local storage. 
export const toggleAttendingEventLS = (eventId) => {
  const attendingEventIds = fetchAttendingEventIdsFromLS();
  
  if (isAttendingEvent(eventId)) {
    attendingEventIds.splice(attendingEventIds.indexOf(eventId), 1);
  } else {
    attendingEventIds.push(eventId);
  }

  setAttendingEventIdsToLS(attendingEventIds);
}