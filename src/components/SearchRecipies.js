import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doFetchRecipies } from '../actions/recipe';
import { doChangeQuery, doSetQuery } from '../actions/query';
import { getQuery, getQueryKey } from '../selectors/query';
import { Button, SearchButton } from './Button';

const SearchRecipies = ({ 
  onFetchRecipies, 
  query, 
  onChangeQuery,
  onSetQuery,
  queryKey
  }) => {
  
  //handle change
  const onChange = event => (
    onChangeQuery(event.target.value)
  );
  //handle submission
  const onSubmit = event => {
    if(query) {
      //dispatch an action
      //fetch data and add to new list
      onFetchRecipies(query);
      //set query to ""; store query to queryKey
      onSetQuery(query, queryKey);  
    }

    event.preventDefault();
  };
 
  return(
    <div>
      <SearchButton
        onChange={onChange}
        onClick={onSubmit}
        query={query}
      >
        Search More
      </SearchButton>
    </div>
  )	
}

//mapDispatchToProps will return an plain object
const mapDispatchToProps = dispatch => ({
  //doFetchRecipies will return an action
  onFetchRecipies: query => dispatch(doFetchRecipies(query)),
  onChangeQuery: query => dispatch(doChangeQuery(query)),
  onSetQuery: (query, queryKey) => dispatch(doSetQuery(query, queryKey)),  
  //could create several dispatch actions 
});

const mapStateToProps = state => ({
  query: getQuery(state),
  queryKey: getQueryKey(state),
})  

/*****connect React Component with Store*****/
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchRecipies);