import { handleActions } from 'redux-actions';
import * as types from '../actions/ActionTypes';

export default handleActions({
  [types.ADD_ITEM]: (state, action) => [action.payload, ...state],
  [types.RESET]: (state, action) => [],
}, []);
