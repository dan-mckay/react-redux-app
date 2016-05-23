import { combineReducers } from 'redux';
import listReducer from './navigation/reducer';
import rootReducer from './app-root/reducer';

export default combineReducers({
  listy: listReducer,
  root: rootReducer
});
