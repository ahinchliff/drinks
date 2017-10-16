import { SET_EVENTS, TOGGLE_ATTENDING_EVENT } from '../actions/types';

// state = null || array[Event]
// SET_EVENTS: sets state to payload containing array[Event]
// TOGGLE_ATTENDING_EVENT: payload = eventId. The current state is modified and set to state. 
export default (state = null, action) => {
  switch(action.type) {
    case SET_EVENTS:
      return action.payload;

    case TOGGLE_ATTENDING_EVENT:
      return state.map(event => {
        if (event.id === action.payload) {
          event.attending = event.attending ? false : true
        }
        return event;
      })

    default:
      return state;
  }
}