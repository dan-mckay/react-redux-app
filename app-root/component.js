import { connect } from 'react-redux';
import { changeText } from './actions';
import React from 'react';

export const AppComponent = props => {
  return (
    <div>
      <p>{props.textContent}</p>
      <input type="text" name="textbox" onChange={props.sendText} />
      <button onClick={props.onClick}>clear the text</button>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    textContent: state.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendText: event => dispatch(changeText(event.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
