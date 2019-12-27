import { QUERY_SET, QUERY_CHANGE } from '../constants/actionTypes';


const doSetQuery = (query, queryKey) => ({
  type: QUERY_SET,
  query,
  queryKey,
});

const doChangeQuery = query => ({
  type: QUERY_CHANGE,
  query, 
});

export {
  doSetQuery,
  doChangeQuery,	
}