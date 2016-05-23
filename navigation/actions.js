export const ADD_TO_LIST = 'navigation/ADD_TO_LIST';

export function addToList(txt) {
  return function changeTextThunk(dispatch, getState) {
    dispatch({
      type: ADD_TO_LIST,
      text: txt
    });
  }
}

export const REMOVE_FROM_LIST = 'navigation/REMOVE_FROM_LIST';

export function removeFromList(txt) {
  return function changeTextThunk(dispatch, getState) {
    dispatch({
      type: REMOVE_FROM_LIST,
      text: txt
    });
  }
}
