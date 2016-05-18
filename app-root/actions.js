export const CHANGE_TEXT = 'app-root/CHANGE_TEXT'

export function changeText(txt) {
  return function changeTextThunk(dispatch, getState) {
    const { text } = getState();

    if (txt !== text) {
      dispatch({
        type: CHANGE_TEXT,
        text: txt
      });
    }
  }
}
