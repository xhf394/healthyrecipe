import {
  ADD_TO_TOTAL,
  DELETE_FROM_TOTAL,	
} from '../constants/actionTypes';

const doAddToTotal = (recipe, calories) => ({
  type: ADD_TO_TOTAL,
  recipe,
  calories,
});

const doDeleteFromTotal = (recipe, calories) => ({
  type: DELETE_FROM_TOTAL,
  recipe,
  calories,	
});

export {
	doAddToTotal,
    doDeleteFromTotal,
};

