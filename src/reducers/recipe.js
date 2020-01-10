//*******************This is being updated****************//
//this is the reducer to deal with 
//1. updating state;
//2. state transition
//for recipies list.
//*******************************************************//
import { 
  RECIPE_ADD,
  RECIPE_FETCH_ERROR
} from '../constants/actionTypes';

//initiate as an object with error key&value
const INITIAL_STATE = { 
  recipe: [],
  error: null,
};

const applyAddRecipe = (state, action) => ({
  recipe: [action.recipe],
  error: null,	
});

const applyFetchErrorRecipe = (state, action) => ({
  recipe: [],
  error: action.error,	
});

function recipeReducer(state = INITIAL_STATE, action) {
    switch(action.type) {    
      //new state
      case RECIPE_ADD: {
        return applyAddRecipe(state, action);
      }
      case RECIPE_FETCH_ERROR: {
      	return applyFetchErrorRecipe(state, action);
      }
      
      //default
      default: return state;	
    }
}

export default recipeReducer;

