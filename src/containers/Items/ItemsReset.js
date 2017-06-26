import React from 'react';
import { connect } from 'react-redux';
import Reset from '../../actions/Reset';

export const ItemsReset = ({ resetItems }) => {
  return (
    <button onClick={resetItems}>Reset</button>
  )
};

const mapDispatchToProps = (dispatch) => ({
  resetItems: () => dispatch(Reset()),
});

export default connect(null, mapDispatchToProps)(ItemsReset)
