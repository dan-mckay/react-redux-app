import { connect } from 'react-redux';
import { addToList, removeFromList } from './actions';
import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import styles from './list.css';

export const List = props => {
  const items = props.list.map((item, i) => {
    return (
      <div className={styles.listItem} key={item} onClick={i => props.onClick(item)}>
        {item}
      </div>
    );
  });
  return (
    <div>
      <form onSubmit={props.handleAdd}>
        <input type="text" name={"addText"} />
        <input type="submit" value="Add Item" />
      </form>
      <TransitionGroup transitionName={styles.listItem} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {items}
      </TransitionGroup>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: event => handleAddItem(event, dispatch),
    onClick: item => dispatch(removeFromList(item))
  };
}

function handleAddItem(event, dispatch) {
  event.preventDefault();
  dispatch(addToList(event.target.firstChild.value));
}

function mapStateToProps(state, props) {
  return {
    list: state.listy.list
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
