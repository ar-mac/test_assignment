import { handleActions } from 'redux-actions';
import * as types from '../actions/ActionTypes';

export default handleActions({
  [types.ADD_ITEM]: (state, action) => [{
    ...action.payload,
    count: state.length,
  },
    ...state
  ],
  [types.RESET]: (state, action) => [],
}, []);
