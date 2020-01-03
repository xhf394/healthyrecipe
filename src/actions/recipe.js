import { 
  RECIPE_FETCH,
  RECIPE_ADD,
  RECIPE_FETCH_ERROR,
} from '../constants/actionTypes';


const doAddRecipe = recipe => ({
  type: RECIPE_ADD,
  recipe, 
});


const doFetchRecipe = query => ({
  type: RECIPE_FETCH,
  query,   
});

const  doFetchErrorRecipe = error => ({
  type: RECIPE_FETCH_ERROR,
  error,	
});

export {
  doAddRecipe,
  doFetchRecipe,
  doFetchErrorRecipe,	
};