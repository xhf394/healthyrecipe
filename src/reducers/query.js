import { QUERY_SET, QUERY_CHANGE } from '../constants/actionTypes';

const INITIAL_STATE = {
  query:'',
  queryKey: null,	
};

const queryReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
  	case QUERY_CHANGE: {
      return {...state, query: action.query};
  	}
    case QUERY_SET: {
      return {query: '', queryKey: action.query}; 
    }
  	default: return state;
  }
};

export default queryReducer;