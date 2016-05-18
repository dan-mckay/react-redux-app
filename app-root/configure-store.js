import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  loggerMiddleware
)(createStore);

export default initialState => createStoreWithMiddleware(rootReducer, initialState);
