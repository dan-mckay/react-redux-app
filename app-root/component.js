import { connect } from 'react-redux';
import { changeText } from './actions';
import React from 'react';

export const AppComponent = props => {
  const placeHolderText = 'Enter some text';
  return (
    <div>
      <input type="text" name="textbox" onChange={props.sendText} placeholder={placeHolderText} />
      <button onClick={props.onClick}>clear the text</button>
      <p>{props.textContent}</p>
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
    sendText: event => dispatch(changeText(event.target.value)),
    onClick: event => {
      dispatch(changeText(''))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
