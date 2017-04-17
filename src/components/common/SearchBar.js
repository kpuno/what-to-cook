import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as recipeActions from '../../actions/recipeActions';
import { bindActionCreators } from 'redux';
import { FormGroup, InputGroup, FormControl, Button, Grid } from 'react-bootstrap';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.actions.fetchRecipeList(this.state.term)
			.then(() => this.redirect())
			.catch(error => {
				throw (error);
			});
		this.setState({ term: '' });
	}

	redirect() {
		this.context.router.push('/recipesearchlist');
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	render() {
		return (
			<div>
				<div className="col-sm-8 col-sm-offset-2">
					<form onSubmit={this.onFormSubmit}>
						<div className="input-group">
							<input
								className="form-control input-lg"
								type="text"
								value={this.state.term}
								placeholder="Search for.."
								onChange={this.onInputChange}
							/>
							<span className="input-group-btn">
								<Button onClick={this.onFormSubmit} bsStyle="btn btn-primary btn-lg">Search</Button>
							</span>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	actions: PropTypes.object.isRequired,
	fetchRecipeList: PropTypes.func
};

//Pull in the React Router context so router is available on this.context.router.
SearchBar.contextTypes = {
	router: PropTypes.object
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(recipeActions, dispatch)
	};
}

export default connect(null, mapDispatchToProps)(SearchBar);