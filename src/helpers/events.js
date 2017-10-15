// helpers
const fetchAttendingEventIdsFromLS = () => {
  return JSON.parse(localStorage.getItem("attendingEvents")) || [];
}

export const setAttendingEventIdsToLS = (eventIds) => {
  return localStorage.setItem("attendingEvents", JSON.stringify(eventIds));
}

export const isAttendingEvent = (eventId) => {
  let attendingIds = fetchAttendingEventIdsFromLS();
  return attendingIds.indexOf(eventId) > -1;
}

export const toggleAttendingEventLS = (eventId) => {
  const attendingEventIds = fetchAttendingEventIdsFromLS();
  
  if (isAttendingEvent(eventId)) {
    attendingEventIds.splice(attendingEventIds.indexOf(eventId), 1);
  } else {
    attendingEventIds.push(eventId);
  }

  setAttendingEventIdsToLS(attendingEventIds);
}