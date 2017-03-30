import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.user, action){
  switch (action.type) {
    case types.GET_USER:
      return Object.assign({}, state, {email: action.email});
    default:
      return state;
  }
}