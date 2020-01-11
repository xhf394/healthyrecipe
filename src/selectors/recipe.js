const isNotArchived = archiveIds => recipe => 
  archiveIds.indexOf(recipe.food.foodId) === -1;

//const getReadableRecipies = ({ recipeState, archiveState }) => 
//  recipeState.recipies.filter(isNotArchived(archiveState));	

//handle error
const getFetchError =({ recipeState }) => 
  recipeState.error;

//searched recipe render on search page
const getReadableRecipe = ({ recipeState }) => 
  recipeState.recipe;

const getMainRecipies = ({ mainRecipeState }) =>
  mainRecipeState.mainRecipies;    

const getSuggestedList = ({ mainRecipeState }) => 
  mainRecipeState.suggestedList;

export {
  //getReadableRecipies,
  getFetchError,
  getReadableRecipe,
  getMainRecipies,
  getSuggestedList,	
};