import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as recipeActions from '../../actions/recipeActions';
import {bindActionCreators} from 'redux';
import { FormGroup, InputGroup, FormControl, Button, Col, Grid, Row} from 'react-bootstrap';

class SearchBar extends React.Component {

    constructor(props){
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
                throw(error);
            });
        this.setState({term: ''});
    }

    redirect() {
         this.context.router.push('/recipesearchlist');
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <Grid>
                <Row>
                    <form onSubmit={this.onFormSubmit}>
                    <FormGroup>
                        <InputGroup>
                            <FormControl 
                                type="text" 
                                value={this.state.term} 
                                placeholder="Search for.."
                                onChange={this.onInputChange}
                                />
                            <Button bsStyle="primary">Search</Button>
                        </InputGroup>
                        </FormGroup>
                    </form>
                </Row>
            </Grid>
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