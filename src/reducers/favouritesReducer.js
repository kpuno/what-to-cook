import * as types from '../actions/actionTypes';
import initialState from './initialState';

// use initialState.favourites, its ruining mapStateToProps in RecipeCard
export default function favouritesReducer(state = initialState.favourites, action) {
  switch(action.type) {
    case types. FETCH_FAVOURITES_SUCCESS:
		console.log(action);
      return state.concat(action.data);
    default:
      return state;
  }
}