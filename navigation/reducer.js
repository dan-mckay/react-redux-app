import { ADD_TO_LIST, REMOVE_FROM_LIST } from './actions';

const DEFAULT_STATE = {
  list: ['hello', 'world', 'click', 'me']
}

export default function listReducer(state = DEFAULT_STATE, action) {
  let nextState = state;
  switch (action.type) {
    case ADD_TO_LIST:
      const addList = state.list.concat([action.text]);
      console.log('addList', addList);
      nextState = {
        ...state,
        list: addList
      };
      break;
    case REMOVE_FROM_LIST:
      const removeList = state.list.filter(item => {
        return item !== action.text
      });
      console.log('removeList', removeList);
      nextState = {
        ...state,
        list: removeList
      };
      break;
    default:
      break;
  }
  return nextState;
}
