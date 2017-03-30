import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFavourites } from '../../actions/favouritesActions';
import { Grid, Col } from 'react-bootstrap';
import RecipeCard from './RecipeCard';

class FavouriteRecipes extends React.Component {

    constructor(props) {
        super(props);

				this.state = {
            activerecipe: ''
        };

				this.renderFavourites = this.renderFavourites.bind(this);
				this.renderRecipe = this.renderRecipe.bind(this);
    }

		renderFavourites() {
			console.log(this.props.user);
			this.props.fetchFavourites(this.props.user);
		}

		getRecipeID(id) {
        this.props.fetchDetailedRecipe(id);
        this.setState({activerecipe: id});  
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
                    getRecipeID={this.getRecipeID}/>
            </Col>
                );
    }

    render() {
        return (
            <div className="container">
                <h1>Recipe Favourites Page Works</h1>
								<button onClick={this.renderFavourites}>TEST</button>
								<Grid>
									{this.props.favourites.map(this.renderRecipe)}
								</Grid>
            </div>
        );
    }
}

FavouriteRecipes.propTypes = {
    favourites: PropTypes.array
};

function mapStateToProps(state) {
    return {
        user: state.user.email,
				favourites: state.favourites
    };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchFavourites}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteRecipes);