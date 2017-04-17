import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import { removeRecipe } from '../../actions/compareActions';
import toast from 'toastr';

class CompareRecipe extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			details1: null,
			details2: null
		};

		this.Testing = this.Testing.bind(this);
		this.removeComparison = this.removeComparison.bind(this);
	}

	Testing() {
		let d1 = this.props.compare[0].steps[0];
		let d2 = this.props.compare[1].steps[0];
		this.setState({
			details1: d1,
			details2: d2
		});
	}

	removeComparison() {
		this.props.removeRecipe();
		toastr.success('Cleared comparisons');
		this.setState({ details1: '', details2: '' });
	}

	// this.state.details1[0].steps

	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			let d1 = nextProps.compare[0].steps[0];
			let d2 = nextProps.compare[1].steps[0];
			this.setState({
				details1: d1,
				details2: d2
			});
		}
	}

	// some recipes do not have anything ex. [] some dont have equiment or ingredients or instructions
	// TODO: reafactor
	render() {
		return (
			<div className="container">
				{console.log(this.props.compare)}
				<h1>Compare Recipes</h1>
				<h2>Recipe 1</h2>
				<strong>Equipment</strong>
				{this.state.details1 !== null ? this.state.details1.equipment.map((equip) => { return <p key={equip.id}>{equip.name}</p>; }) : 'empty'}
				<strong>Ingredients</strong>
				{this.state.details1 !== null ? this.state.details1.ingredients.map((ing) => { return <p key={ing.id}>{ing.name}</p>; }) : 'empty'}
				<strong>Instructions</strong>
				<p>{this.state.details1 !== null ? this.state.details1.step : 'empty'}</p>
				<h2>Recipe 2</h2>
				<strong>Equipment</strong>
				{this.state.details2 !== null ? this.state.details2.equipment.map((equip) => { return <p key={equip.id}>{equip.name}</p>; }) : 'empty'}
				<strong>Ingredients</strong>
				{this.state.details2 !== null ? this.state.details2.ingredients.map((ing) => { return <p key={ing.id}>{ing.name}</p>; }) : 'empty'}
				<strong>Instructions</strong>
				<p>{this.state.details2 !== null ? this.state.details2.step : 'empty'}</p>
				<Button onClick={this.Testing}>Click me</Button>
				<Button onClick={this.removeComparison}>Clear Comparing</Button>
			</div>
		);
	}
}

CompareRecipe.propTypes = {
	compare: PropTypes.array
};

function mapStateToProps(state) {
	return {
		compare: state.compare
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ removeRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareRecipe);