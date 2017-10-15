import { combineReducers } from 'redux';
import events from './reducer_events';
import searchTerm from './reducer_search_term';


export default combineReducers({
  events,
  searchTerm,
});