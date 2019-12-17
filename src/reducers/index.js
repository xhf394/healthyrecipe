import { combineReducers } from 'redux';
import recipeReducer from './recipe';
import archiveReducer from './archive';

const rootReducer = combineReducers({
  recipeState: recipeReducer,
  archiveState: archiveReducer,	
});

export default rootReducer;