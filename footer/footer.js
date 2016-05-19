import { connect } from 'react-redux';
import React from 'react';
import styles from './footer.css';

export const Footer = props => {
  return (
    <div className={styles.footer}>
      This is the footer
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    textContent: state.text
  };
}

export default connect(mapStateToProps)(Footer);
