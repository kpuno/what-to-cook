import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class FavouriteRecipes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favourites: []
        };

        this.testFunction = this.testFunction.bind(this);
    }

    // this.state.details[0].steps

    componentWillReceiveProps(nextProps) {
        if (this.props.favourites == null || this.props.favourites !== this.state.favourites) {
            this.setState({ favourites: Object.assign({}, nextProps.favourites) });
        }
    }

    // some recipes do not have anything ex. [] some dont have equiment or ingredients or instructions
    // TODO: reafactor
    //  this.setState({details: Object.assign({}, nextProps.detailedrecipe[0].steps[0])});

    testFunction(key) {
        let fav = this.state.favourites[key];
        return (
            <div key={key}>
                <strong>Equipment</strong>
                {fav.steps[0].equipment.map((equip) => { return <p key={equip.id}>{equip.name}</p>; })}
                <strong>Ingredients</strong>
                {fav.steps[0].ingredients.map((ing) => { return <p key={ing.id}>{ing.name}</p>; })}
                <strong>Instructions</strong>
                <p>{fav.steps[0].step}</p>
                <br/>
                <br/>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <h1>Recipe Favourites Page Works</h1>
                {this.state.favourites !== null ? Object.keys(this.state.favourites)
                    .map((key) => {
                     return this.testFunction(key);
                    }) : 'empty'
                }
            </div>
        );
    }
}

FavouriteRecipes.propTypes = {
    favourites: PropTypes.array
};

function mapStateToProps(state) {
    return {
        favourites: state.favourites
    };
}

export default connect(mapStateToProps)(FavouriteRecipes);