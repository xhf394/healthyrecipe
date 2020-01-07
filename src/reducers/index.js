import { combineReducers } from 'redux';
import recipeReducer from './recipe';
import archiveReducer from './archive';
import componentSwitchReducer from './componentSwitch';
import queryReducer from './query';
import mainRecipeReducer from './mainRecipe';
import totalReducer from './total';

const rootReducer = combineReducers({
  recipeState: recipeReducer,
  archiveState: archiveReducer,
  componentSwitchState: componentSwitchReducer,	
  queryState: queryReducer,
  mainRecipeState: mainRecipeReducer,
  totalState: totalReducer,
});

export default rootReducer;