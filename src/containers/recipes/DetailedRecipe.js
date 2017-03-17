import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

class DetailedRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details: null
        };
    }

    // this.state.details[0].steps

    componentWillReceiveProps(nextProps) {
        if (this.props.detailedrecipe == null || this.props.detailedrecipe !== this.state.details) {
            this.setState({details: Object.assign({}, nextProps.detailedrecipe[0].steps[0])});
        }
    }

    // some recipes do not have anything ex. [] some dont have equiment or ingredients or instructions

    render(){
        return (
            <div>
                <h1>Recipe Detail Page Works</h1>
                <strong>Equipment</strong>
                {this.state.details !== null ? this.state.details.equipment.map((equip) => {return <p key={equip.id}>{equip.name}</p>;}) : 'empty'}
                <strong>Ingredients</strong>
                {this.state.details !== null ? this.state.details.ingredients.map((ing) => {return <p key={ing.id}>{ing.name}</p>;}): 'empty'}
                <strong>Instructions</strong>
                <p>{this.state.details !== null ? this.state.details.step : 'empty'}</p>
                {console.log(this.state.details)}
            </div>
        );
    }
}

DetailedRecipe.propTypes = {
    detailedrecipe: PropTypes.array
};

function mapStateToProps(state) {
    return {
        detailedrecipe: state.recipe.activerecipe
    };
}

export default connect(mapStateToProps)(DetailedRecipe);