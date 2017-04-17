import React, { PropTypes } from 'react';
import RecipeCard from './RecipeCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetailedRecipe } from '../../actions/recipeActions';
import { Grid, Col, Button } from 'react-bootstrap';
import SearchBar from '../../components/common/SearchBar';
import { browserHistory } from 'react-router';

class RecipeSearchList extends React.Component {

	constructor(props) {
		super(props);

		// might not need to set state
		this.state = {
			activerecipe: ''
		};

		this.renderRecipe = this.renderRecipe.bind(this);
		this.getRecipeID = this.getRecipeID.bind(this);
	}

	getRecipeID(id) {
		this.props.fetchDetailedRecipe(id);
		this.setState({ activerecipe: id });
	}

	renderRecipe(recipe) {
		return (
			<Col key={recipe.id} xs={6} md={4}>
				<RecipeCard
					key={recipe.id}
					id={recipe.id}
					likes={recipe.likes}
					title={recipe.title}
					image={recipe.image}
					getRecipeID={this.getRecipeID} />
			</Col>
		);
	}

	render() {
		return (
			<div className="container">
				<h1>Recipe Search</h1>
				<SearchBar />
				<Grid className="row">
					{this.props.compare.length >= 2 ? <Button onClick={() => browserHistory.push('/comparerecipe')}bsStyle="info">View Comparison</Button> : null}
					{this.props.recipe.map(this.renderRecipe)}
				</Grid>
			</div>
		);
	}
}

RecipeSearchList.propTypes = {
	recipe: PropTypes.array,
	fetchDetailedRecipe: PropTypes.func
};

function mapStateToProps(state) {
	return {
		recipe: state.recipe.recipelist,
		activerecipe: state.recipe.activerecipe,
		compare: state.compare
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchDetailedRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearchList);