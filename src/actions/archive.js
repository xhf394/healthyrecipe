import { RECIPE_ARCHIVE } from '../constants/actionTypes';

const doArchiveRecipe = id => ({
  type: RECIPE_ARCHIVE,
  id,	
});

export {
  doArchiveRecipe,	
}