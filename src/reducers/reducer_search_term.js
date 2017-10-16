import { SET_SEARCH_TERM } from '../actions/types';

// state = string that defaults to ''
// SET_SEARCH_TERM: payload is search term that is saved to state
export default (state = '', action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return action.payload
    default:
      return state;
  }
}