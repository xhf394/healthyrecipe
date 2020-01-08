import {
  ADD_TO_TOTAL,
  DELETE_FROM_TOTAL,	
} from '../constants/actionTypes';

const INITIAL_STATE = {
  totalValue: null, //{ number }
  calculationList: [], //[ ...ids ]
  quantityListById: {}, //{ id: quantity }
};

const applyAddToTotal = (state, action) => {
  const { totalValue, calculationList, quantityListById } = state;
  const { recipe, calories } = action;
  
  //deal with total Value
  const oldTotal = totalValue ? totalValue : 0;
  const updatedTotal = oldTotal + calories;
  

  //update calculation List id;
  const updatedCalculationList = calculationList.indexOf(recipe.foodId) !== -1 
                               ? calculationList
                               : [...calculationList, recipe.foodId];

  //update quantity list and update quantity;
   const updatedQuantityList = {
     ...quantityListById,
     [recipe.foodId]: (quantityListById[recipe.foodId] || 0) + 1	  
   }       
  //decide if the calculation list is empty

  //1st: add new label food, and set counter as 1;
  //2nd: keep the old list, and only update label food counter ++;
  return {
  	totalValue: updatedTotal,
  	calculationList: updatedCalculationList,
  	quantityListById: updatedQuantityList,
  }
};

const applyDeleteFromTotal = (state, action) => {
  const { totalValue, calculationList, quantityListById } = state;
  const { recipe, calories } = action;
  
  //if quantity already reduced to 1, cannot decrement more
  const isAbleToDecrement = ( recipe, quantityListById ) => 
    quantityListById[recipe.foodId] > 1;

  //deal with total value;
  const updatedTotal =  isAbleToDecrement ? totalValue - calories : totalValue;

  //calculationList will remain unchanged, and will only be updated with delete

  //the counter will be decrement to at least 1 in the list
  const updatedQuantityList = {
    ...quantityListById,
    [recipe.foodId]: isAbleToDecrement ? quantityListById[recipe.foodId] - 1 : 1,
  }

  return {
  	totalValue: updatedTotal,
  	calculationList,
  	quantityListById: updatedQuantityList,
  }
};


const totalReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
  	case ADD_TO_TOTAL: {
      return applyAddToTotal(state, action);
  	}
  	case DELETE_FROM_TOTAL: {
      return applyDeleteFromTotal(state, action);
  	}
  	default: return state;
  }	
};

export default totalReducer;