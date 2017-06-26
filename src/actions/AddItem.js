import { createAction } from 'redux-actions';
import { ADD_ITEM } from './ActionTypes';

export default createAction(ADD_ITEM, ({content}) => ({
  id: new Date().valueOf().toString(),
  content
}))
