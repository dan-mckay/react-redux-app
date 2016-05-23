import { CHANGE_TEXT } from './actions';

const DEFAULT_STATE = {
  text: 'Hello World'
}

export default function rootReducer(state = DEFAULT_STATE, action) {
  console.log('£££', action)
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
