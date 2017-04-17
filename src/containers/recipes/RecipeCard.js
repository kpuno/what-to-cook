import React, { PropTypes } from 'react';
import { Panel, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavourites, deleteFavourites } from '../../actions/favouritesActions';
import { addCompareRecipe } from '../../actions/compareActions';
import toastr from 'toastr';

// adding connect, refactor later maybe state can be in a 
// class is also for testing

const cardStyle = {
	width: '35rem'
};

const imgStyle = {
	width: '318px',
	height: '180px'
};

class RecipeCard extends React.Component {
	constructor(props, id, likes, title, image, getRecipeID) {
		super(props, id, likes, title, image, getRecipeID);

		this.addFavourites = this.addFavourites.bind(this);
		this.favouriteButton = this.favouriteButton.bind(this);
		this.deleteButton = this.deleteButton.bind(this);
		this.deleteFavourites = this.deleteFavourites.bind(this);
		this.addCompareRecipe = this.addCompareRecipe.bind(this);
	}

	addFavourites({ email, id, title, image, likes }) {
		toastr.success('Added to favourites');
		this.props.addFavourites({ email, id, title, image, likes });
	}

	deleteFavourites({ email, id, title, image, likes }) {
		this.props.deleteFavourites({ email, id, title, image, likes });
	}

	favouriteButton({ email, id, title, image, likes }) {
		return <Button onClick={() => this.addFavourites({ email, id, title, image, likes })} bsStyle="success">Favorite</Button>
	}

	deleteButton({ email, id, title, image, likes }) {
		return <Button onClick={() => this.deleteFavourites({ email, id, title, image, likes })} bsStyle="danger">Delete</Button>
	}

	addCompareRecipe(id) {
		if (this.props.compare.length >= 2) {
			toastr.warning('Only maximum of 2 recipes to compare!');
		} else {
			toastr.success('Added to compare');
			this.props.addCompareRecipe(id);
		}
	}

	compareButton(id) {
		return <Button onClick={() => this.addCompareRecipe(id)} bsStyle="info">Compare</Button>
	}

	render() {
		let email = this.props.user;
		let id = this.props.id;
		let title = this.props.title;
		let image = this.props.image;
		let likes = this.props.likes;
		return (
			<Panel header={<div className="textTitle">{this.props.title}</div>} bsStyle="primary" style={cardStyle}>
				<img style={imgStyle} src={this.props.image ? this.props.image : ""} alt="Card image cap" />
				<div>
					Likes: {this.props.likes}
					&nbsp;
                id: {this.props.id}
					<br />
					<p>
						<Link
							to={'/recipe/' + this.props.id}
							className="btn btn-primary"
							onClick={() => this.props.getRecipeID(this.props.id)}
						>Details</Link>
						&nbsp;
						{location.pathname === '/recipesearchlist' ? this.favouriteButton({ email, id, title, image, likes }) : null}
						{location.pathname === '/recipesearchlist' ? this.compareButton(id) : null}
						{location.pathname === '/favourites' ? this.deleteButton({ email, id, title, image, likes }) : null}
					</p>
				</div>
			</Panel>
		);
	}
}

// maybe add summarize recipe, but this is going to add too many ajax calls	

RecipeCard.propTypes = {
	id: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string,
	getRecipeID: PropTypes.func,
	// added for debuging
	favourites: PropTypes.array,
	addRecipeToFavourites: PropTypes.func
};

// added for debugging
function mapStateToProps(state) {
	return {
		favourites: state.favourites,
		user: state.user.email,
		compare: state.compare
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addFavourites, deleteFavourites, addCompareRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);