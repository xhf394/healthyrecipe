import {
  INCREMENT_TOTAL,
  DECREMENT_TOTAL,	
  DELETE_FROM_TOTAL,
} from '../constants/actionTypes';

const doIncrementTotal = (recipe, calories) => ({
  type: INCREMENT_TOTAL,
  recipe,
  calories,
});

const doDecrementTotal = (recipe, calories) => ({
  type: DECREMENT_TOTAL,
  recipe,
  calories,	
});

const doDeleteFromTotal = (recipe, calories) => ({
  type: DELETE_FROM_TOTAL,
  recipe,
  calories,
})


export {
	doIncrementTotal,
  doDecrementTotal,
  doDeleteFromTotal,
};

