import { combineReducers } from 'redux';

import messagesReducer from './messages_reducer';
// import channelsReducers from './channels_reducer';
import activeChannelReducer from './active_channel_reducer';
// import currentUserReducer from './current_user_reducer';

// state and reducers
const rootReducer = combineReducers({
  messages: messagesReducer,
  channels: (state = null) => state,
  currentUser: (state = null) => state,
  selectedChannel: activeChannelReducer
});

export default rootReducer;
