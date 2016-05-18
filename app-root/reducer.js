import { CHANGE_TEXT } from './actions';

export default function rootReducer(state = {}, action) {
  let nextState = state;
  switch (action.type) {
    case CHANGE_TEXT:
      nextState = {
        ...state,
        text: action.text
      };
      break;
    default:
      break;
  }
  return nextState;
}
