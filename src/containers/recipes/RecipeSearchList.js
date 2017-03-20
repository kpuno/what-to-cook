import React, {PropTypes} from 'react';
import RecipeCard from './RecipeCard';
import { connect } from 'react-redux';
import {Grid, Col} from 'react-bootstrap'; 
import { bindActionCreators } from 'redux';
import { fetchDetailedRecipe } from '../../actions/recipeActions';

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
    recipe: PropTypes.array,
    fetchDetailedRecipe: PropTypes.func
};

function mapStateToProps(state) {
  return {
      recipe: state.recipe.recipelist,
      activerecipe: state.recipe.activerecipe
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchDetailedRecipe}, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearchList);