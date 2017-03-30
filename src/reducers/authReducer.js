import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.auth, action){
  switch (action.type) {
    case types.AUTH_USER:
      return Object.assign({}, state, {authenticated: true});
    case types.DE_AUTH_USER:
      return Object.assign({}, state, {authenticated: false});
    case types.AUTH_ERROR:
      return Object.assign({}, state, {error: action.message});
    case types.FETCH_DATA:
      return Object.assign({}, state, {protectedData: action.data});
    default:
      return state;
  }
}