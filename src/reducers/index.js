import { combineReducers } from 'redux';
import recipeReducer from './recipe';
import archiveReducer from './archive';
import componentSwitchReducer from './componentSwitch';
import queryReducer from './query';

const rootReducer = combineReducers({
  recipeState: recipeReducer,
  archiveState: archiveReducer,
  componentSwitchState: componentSwitchReducer,	
  queryState: queryReducer,
});

export default rootReducer;