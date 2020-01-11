import {
  INCREMENT_TOTAL,
  DECREMENT_TOTAL,	
  DELETE_FROM_TOTAL,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  totalValue: 0, //{ number }
  calculationList: [], //[ ...ids ]
  recipeList: [],
  quantityListById: {}, //{ id: quantity }
};

const applyIncrementTotal = ( state, action ) => {
  const { totalValue, calculationList, quantityListById, recipeList } = state;
  const { recipe, calories } = action;
  
  //deal with total Value
  const updatedTotal = totalValue + calories;
  
  const isAbleToAdd = ( calculationList, recipe ) => calculationList.indexOf(recipe.foodId) === -1;

  //update calculation List id;
  const updatedCalculationList = isAbleToAdd(calculationList, recipe) 
                               ? [...calculationList, recipe.foodId]
                               : calculationList;

  const updatedRecipeList = isAbleToAdd(calculationList, recipe)
                          ? [...recipeList, recipe]
                          : recipeList;                             

  //update quantity list and update quantity;
  const updatedQuantityList = {
    ...quantityListById,
    [recipe.foodId]: (quantityListById[recipe.foodId] || 0) + 1	  
  }; 

  
  return {
  	totalValue: updatedTotal,
  	calculationList: updatedCalculationList,
    recipeList: updatedRecipeList,
  	quantityListById: updatedQuantityList,
  }
};

const applyDecrementTotal = ( state, action ) => {
  const { totalValue, calculationList, quantityListById, recipeList } = state;
  const { recipe, calories } = action;
  
  //if quantity already reduced to 1, cannot decrement more
  const isAbleToDecrement = ( recipe, quantityListById ) =>   
    quantityListById && quantityListById && quantityListById[recipe.foodId] > 1;

  //deal with total value;
  const updatedTotal =  isAbleToDecrement(recipe, quantityListById) 
                     ? totalValue - calories 
                     : totalValue;

  //calculationList will remain unchanged, and will only be updated with delete

  //the counter will be decrement to at least 1 in the list
  const updatedQuantityList = isAbleToDecrement(recipe, quantityListById)
                            ? {
                                ...quantityListById,
                                [recipe.foodId]: quantityListById[recipe.foodId] - 1,
                              }
                            : quantityListById;

  return {
  	totalValue: updatedTotal,
  	calculationList,
    recipeList,
  	quantityListById: updatedQuantityList,
  }
};

const applyDeleteFromTotal = ( state, action ) => {
  const { totalValue, calculationList, quantityListById, recipeList } = state;
  const { recipe, calories } = action;
  
  const deleteValue = calories * quantityListById[recipe.foodId];
  const isAbleToDelete = ( calculationList, recipe ) => 
    calculationList.indexOf(recipe.foodId) !== -1;

  const updatedTotal = isAbleToDelete(calculationList, recipe) 
                     ? (totalValue - deleteValue) 
                     : totalValue;

  const updatedCalculationList = calculationList.filter(item => item !== recipe.foodId);
  const updatedRecipeList = recipeList.filter(item => item.foodId !== recipe.foodId);

  delete quantityListById[recipe.foodId];

  return {
    totalValue: updatedTotal || 0,
    calculationList: updatedCalculationList,
    recipeList: updatedRecipeList,
    quantityListById,
  }
};

const totalReducer = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
  	case INCREMENT_TOTAL: {
      return applyIncrementTotal(state, action);
  	}
  	case DECREMENT_TOTAL: {
      return applyDecrementTotal(state, action);
  	}
    case DELETE_FROM_TOTAL: {
      return applyDeleteFromTotal(state, action);
    }
  	default: return state;
  }	
};

export default totalReducer;