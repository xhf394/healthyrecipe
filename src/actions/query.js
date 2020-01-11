import { QUERY_SET, QUERY_CHANGE } from '../constants/actionTypes';


const doSetQuery = query => ({
  type: QUERY_SET,
  query,
});

const doChangeQuery = query => ({
  type: QUERY_CHANGE,
  query, 
});

export {
  doSetQuery,
  doChangeQuery,	
}