import { FECTH_MESSAGES, CREATE_MESSAGE, SELECT_CHANEL } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FECTH_MESSAGES:
      return action.payload;
    case CREATE_MESSAGE: {
      const newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    }
    case SELECT_CHANEL:
      return [];
    default:
      return state;
  }
}

