import { connect } from 'react-redux';
import React from 'react';

export const UserInterface = ({enabled, isMenuVisible}) => (
  enabled ? (
    <div className={styles.wrapper}>
      <PlayPause />
      <MenuToggle />
      { isMenuVisible && <AudioMenu /> }
    </div>
  ) : <GlobalAudioOff />
);

function mapStateToProps(state, props) {
  return state.audio;
}

export default connect(mapStateToProps)(AudioControls);
