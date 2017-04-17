// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import RecipeReducer from './recipeReducer';
import favourites from './favouritesReducer';
import auth from './authReducer';
import { reducer as form } from 'redux-form';
import user from './userReducer';
import compare from './compareReducer';

const rootReducer = combineReducers({
  routing,
  recipe: RecipeReducer,
  favourites,
  auth,
  form,
	user,
	compare
});

export default rootReducer; 