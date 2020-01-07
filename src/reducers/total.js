import {
  ADD_TO_TOTAL,
  DELETE_FROM_TOTAL,	
} from '../constants/actionTypes';

const INITIAL_STATE = {
  totalValue: null, //{number}
  calculationList: null, //[{...}, {...}]
};

const applyAddToTotal = (state, action) => {
  const { total, calories } = state; 

};

const applyDeleteFromTotal = (state, action) => {

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