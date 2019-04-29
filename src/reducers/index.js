import { combineReducers } from 'redux';

import messagesReducer from './messages_reducer';

// state and reducers
const rootReducer = combineReducers({
  messages: messagesReducer,
  channels: (state = null) => state,
  currentUser: (state = null) => state,
});

export default rootReducer;
