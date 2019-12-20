const isNotArchived = archiveIds => recipe => 
  archiveIds.indexOf(recipe.food.foodId) === -1;

const getReadableRecipies = ({ recipeState, archiveState }) => 
  recipeState.recipies.filter(isNotArchived(archiveState));	

//handle error
const getFetchError =({ recipeState }) => 
  recipeState.error;

export {
  getReadableRecipies,
  getFetchError,	
}