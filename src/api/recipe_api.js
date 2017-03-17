import axios from 'axios';
import * as constants from '../constants/constants';

class RecipeApi {
    static getRecipeList(ingredients) {
        const url = `${constants.ROOT_URL_RECIPE_LIST}&fillIngredients=false&ingredients=${ingredients}&limitLicense=false&number=30&ranking=1`;
        return axios.get(url).then((response) =>
            new Promise(resolve => {
                setTimeout(()=> resolve(response), constants.DELAY);
            }));
    }
    static getDetailedRecipe(recipeID) {
        const url = `${constants.ROOT_URL_RECIPE_DETAIL}${recipeID}/analyzedInstructions?stepBreakdown=true/analyzedInstructions?stepBreakdown=true&mashape-key=${constants.API_KEY}`;

        return axios.get(url).then((response) =>
            new Promise((resolve) =>
                setTimeout(() =>resolve(response), constants.DELAY)));
    }
}

export default RecipeApi;