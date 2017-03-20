// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import RecipeReducer from './recipeReducer';
import favourites from './favouritesReducer';

const rootReducer = combineReducers({
  routing,
  recipe: RecipeReducer,
  favourites
});

export default rootReducer;