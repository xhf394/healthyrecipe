import { combineReducers } from 'redux';
import recipeReducer from './recipe';
import archiveReducer from './archive';
import componentSwitchReducer from './componentSwitchReducer';

const rootReducer = combineReducers({
  recipeState: recipeReducer,
  archiveState: archiveReducer,
  componentSwitchState: componentSwitchReducer,	
});

export default rootReducer;