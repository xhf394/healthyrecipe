import { RECIPE_ARCHIVE } from '../constants/actionTypes';

const INITIAL_STATE = [];

//WHY NEEDS TO EXTRACT IT HERE????

const applyArchiveRecipe = (state, action) =>
  [...state, action.id];

const archiveReducer = (state=[INITIAL_STATE], action) => {
	switch(action.type) {

		//new state
        case RECIPE_ARCHIVE: {
          return applyArchiveRecipe(state, action); 	
        }
		//default
		default:
		  return state;
	}
}

export default archiveReducer;