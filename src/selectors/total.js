const getTotalValue = ({ totalState }) => 
  totalState.totalValue;

const getCalculationList = ({ totalState }) =>
  totalState.calculationList;
  
const getRecipeList = ({ totalState }) =>
  totalState.recipeList;

const getQuantityListById = ({ totalState }) =>
  totalState.quantityListById;  

export {
  getTotalValue,
  getCalculationList,
  getRecipeList,
  getQuantityListById,	
};  