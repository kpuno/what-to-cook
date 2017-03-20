import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function favouritesReducer(state = initialState, action) {
  switch(action.type) {
    case types. ADD_RECIPE_TO_FAVOURITES_SUCCESS:
      return { ...state, favourites: state.favourites.concat(action.data)};
    default:
      return state;
  }
}
