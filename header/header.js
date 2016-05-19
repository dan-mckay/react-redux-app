import { connect } from 'react-redux';
import React from 'react';
import styles from './header.css';

export const Header = props => {
  return (
    <div className={styles.header}>
      This is the header
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    textContent: state.text
  };
}

export default connect(mapStateToProps)(Header);
