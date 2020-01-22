import { QUERY_SET, QUERY_CHANGE } from '../constants/actionTypes';

const INITIAL_STATE = {
  query:'',
  queryKey: null,
  queryList: [],
};

const applyQuerySet = ( state, action ) => {
  const { query, queryKey, queryList } = state;
  
  const updatedQuery = action.query;

  queryList.unshift(action.query);
  
  const unique = (array) => {
    var res = array.filter((item, index, array) =>{
      return array.indexOf(item) === index;
    });
    return res;
  }

  const updatedQueryList = unique(queryList);

  
  return {
    query: '', 
    queryKey: query,
    queryList: updatedQueryList, 
  }
};

const queryReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
  	case QUERY_CHANGE: {
      return {...state, query: action.query };
  	}
    case QUERY_SET: {
      return applyQuerySet(state, action);
    }
  	default: return state;
  }
};

export default queryReducer;