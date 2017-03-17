import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import RecipeSearchList from './containers/recipes/RecipeSearchList';
import DetailedRecipe from './containers/recipes/DetailedRecipe';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="recipesearchlist" component={RecipeSearchList} />
    <Route path="recipe/:id" component={DetailedRecipe} />
  </Route>
);
