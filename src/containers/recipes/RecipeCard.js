import React, { PropTypes } from 'react';
import { Panel, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipeToFavourites } from '../../actions/favouritesActions';

// adding connect, refactor later maybe state can be in a 
// class is also for testing

const cardStyle = {
	width: '35rem'
};

const imgStyle = {
	width: '318px',
	height: '180px'
};
/*
const RecipeCard = ({id, likes, title, image, getRecipeID}) => {
    return (
        <Panel header={<div className="textTitle">{title}</div>} bsStyle="primary" style={cardStyle}>
            <img style={imgStyle} src={image ? image : ""} alt="Card image cap"/>
            <div>
                Likes: {likes}
                &nbsp;
                id: {id}
                <br/>
                <p>
                <Link 
                    to={'/recipe/' + id} 
                    className="btn btn-primary"
                    onClick={() => getRecipeID(id)}
                    >Details</Link>
                &nbsp;
                <Button bsStyle="success">Favorite</Button>
                </p>
            </div>
        </Panel>
    );
};*/

class RecipeCard extends React.Component {
	constructor(props, id, likes, title, image, getRecipeID) {
		super(props, id, likes, title, image, getRecipeID);

		this.getRecipe = this.getRecipe.bind(this);
	}

	getRecipe(id) {
		this.props.addRecipeToFavourites(id);
	}

	render() {
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
                <Button onClick={() => this.getRecipe(this.props.id)} bsStyle="success">Favorite</Button>
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
		favourites: state.favourites
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addRecipeToFavourites }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);