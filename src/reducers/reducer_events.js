import { SET_EVENTS, TOGGLE_ATTENDING_EVENT } from '../actions/types';

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