import { handleActions } from 'redux-actions';
import * as types from '../actions/ActionTypes';

export default handleActions({
  [types.ADD_ITEM]: (state, action) => ({
     items: [...state.items, action.payload],
  }),
  [types.RESET]: (state, action) => ({
    items: [],
  })
}, {items: []});
