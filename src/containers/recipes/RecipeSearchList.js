import React, {PropTypes} from 'react';
import RecipeCard from './RecipeCard';
import { connect } from 'react-redux';
import {Grid, Col} from 'react-bootstrap'; 

class RecipeSearchList extends React.Component {

    constructor(props) {
        super(props);

        this.renderRecipe = this.renderRecipe.bind(this);
    }

    renderRecipe(recipe) {
        return (
            <Col key={recipe.id} xs={6} md={4}>
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    likes={recipe.likes}
                    title={recipe.title}
                    image={recipe.image}/>
            </Col>
                );
    }

    render(){
        return (
            <div>
                <h1>Recipe Search List Page Works</h1>
                <Grid>
                    {this.props.recipe.map(this.renderRecipe)}
                </Grid>
            </div>
        );
    }
}

RecipeSearchList.propTypes = {
    recipe: PropTypes.array
};

function mapStateToProps(state) {
  return {recipe: state.recipe.recipelist};
}

export default connect(mapStateToProps)(RecipeSearchList);