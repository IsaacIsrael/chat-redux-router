import { SELECT_CHANEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_CHANEL:
      return action.payload;
    default:
      return state;
  }
}
