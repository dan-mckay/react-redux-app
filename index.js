import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

// The DOM element where React will render our app
const $root = document.getElementById('root');

// The initial state of our app - used by Redux (in the reducer function)
const initState = {
  text: 'hello world'
}

// Our simple React component
const AppComponent = props => {
  return (<div>{props.textContent}</div>);
}

// Used to Inject Redux-related props into your component
function mapStateToProps(state, props) {
  return {
    textContent: state.text
  };
}
// react-redux Connect function wraps it all together
const ConnectedApp = connect(mapStateToProps)(AppComponent);

// An action type, sent to the Redux reducer function
const CHANGE_TEXT = 'OUR_NEW APP_CHANGE_TEXT'

// Reducer function - responds to actions and specifies how the
// application state changes accordingly
function firstReducer(state = initState, action) {
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

// Create the redux store to hold the application state
const store = createStore(firstReducer);

// Link the store to the UI of our app via react-redux Provider
render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  $root
);

// Dispatch an action to the reducer to change the application state in some way
setTimeout(() => {
  store.dispatch({ type: CHANGE_TEXT, text: 'welcome to react & redux' });
}, 5000);
