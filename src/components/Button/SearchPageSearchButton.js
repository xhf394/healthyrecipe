import React,{ useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { doFetchRecipe } from '../../actions/recipe';
import { doChangeQuery, doSetQuery } from '../../actions/query';
import { getQuery, getQueryKey } from '../../selectors/query';
import { getSearch, getMain } from '../../selectors/componentSwitch';
import { doSearchPageSwitch } from '../../actions/componentSwitch';
import Button from './Button';

const SearchPageSearchButton = ({ 
  onFetchRecipe, 
  query, 
  onChangeQuery,
  onSetQuery,
  isMain,
  isSearch,
  onSearchPageSwitch,
  children
  }) => {
  
  //automatically focus on input after page switch
  const inputEl =useRef(null);
  useEffect(()=> {
    inputEl.current.focus();
  },[]);
  //handle change
  const onChange = event => (
    onChangeQuery(event.target.value)
  );
  //handle submission
  const onSubmit = event => {
    if(query) {
      //dispatch an action
      //fetch data and add to new list
      onFetchRecipe(query);
      //set query to ""; store query to queryKey
      onSetQuery(query);  
    }

    event.preventDefault();
  };
 

  return(
    <form 
      onSubmit={onSubmit}
    >
      <input
        onChange={onChange}
        value={query}
        ref={inputEl}
        type='text'
      />
      <Button
        type='submit'
      >
        {children}
      </Button>
    </form>
  ) 
}

//mapDispatchToProps will return an plain object
const mapDispatchToProps = dispatch => ({
  //doFetchRecipies will return an action
  onFetchRecipe: query => dispatch(doFetchRecipe(query)),
  onChangeQuery: query => dispatch(doChangeQuery(query)),
  onSetQuery: query => dispatch(doSetQuery(query)), 
  onSearchPageSwitch: (isMain, isSearch) => dispatch(doSearchPageSwitch(isMain, isSearch)), 
  //could create several dispatch actions 
});

const mapStateToProps = state => ({
  query: getQuery(state),
  isSearch: getSearch(state),
  isMain: getMain(state),
})  

/*****connect React Component with Store*****/
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPageSearchButton);