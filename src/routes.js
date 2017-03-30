import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import RecipeSearchList from './containers/recipes/RecipeSearchList';
import DetailedRecipe from './containers/recipes/DetailedRecipe';
import FavouriteRecipes from './containers/recipes/FavouriteRecipes';
import SignIn from './containers/auth/signIn';
import SignUp from './containers/auth/signUp';
import RequireAuth from './containers/hocs/requireAuth';

// import SignIn from './containers/auth/LoginForm';
// import SignUp from './containers/auth/SignupForm';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="recipesearchlist" component={RecipeSearchList} />
			<Route path="recipe/:id" component={DetailedRecipe} />
			<Route path="favourites" component={RequireAuth(FavouriteRecipes)} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={SignUp} />
		</Route>
	</Router>
);
