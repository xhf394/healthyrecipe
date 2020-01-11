const getQuery = ({queryState}) =>
  queryState.query;

const getQueryKey = ({queryState}) => 
  queryState.queryKey;

const getQueryList = ({queryState}) =>
  queryState.queryList  

export { getQuery, getQueryKey, getQueryList };


