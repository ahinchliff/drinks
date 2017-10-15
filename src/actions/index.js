import axios from 'axios';
import { SET_EVENTS, TOGGLE_ATTENDING_EVENT, SET_SEARCH_TERM } from './types';
import { isAttendingEvent, toggleAttendingEventLS } from '../helpers/events';

const eventAPI = 'https://mock-api.drinks.test.siliconrhino.io/events'

export const fetchEvents = () => async dispatch => {
  const events = (await axios.get(eventAPI)).data;

  // add attending property to each event. 
  events.forEach(event => {
    const { id } = event;
    event.attending = isAttendingEvent(id);
  });

  dispatch({ type: SET_EVENTS, payload: events });
}

export const toggleAttendingEvent = (eventId) => {
  //modify local storage
  toggleAttendingEventLS(eventId);
  return { type: TOGGLE_ATTENDING_EVENT, payload: eventId };
}

export const updateSearchTerm = (searchTerm) => {
  return { type: SET_SEARCH_TERM, payload: searchTerm }
}



