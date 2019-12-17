const isNotArchived = archiveIds => recipe => 
  archiveIds.indexOf(recipe.food.foodId) === -1;

const getReadableRecipies = ({ recipeState, archiveState }) => 
  recipeState.filter(isNotArchived(archiveState));	

export {
  getReadableRecipies,	
}