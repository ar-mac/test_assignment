import React from 'react';
import { connect } from 'react-redux';
import ResetItems from '../../actions/ResetItems';

export const ItemsReset = ({ resetItems }) => (
  <button onClick={resetItems}>Reset</button>
);

const mapDispatchToProps = (dispatch) => ({
  resetItems: () => dispatch(ResetItems()),
});

export default connect(null, mapDispatchToProps)(ItemsReset)
