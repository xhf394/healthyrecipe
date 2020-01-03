import React from 'react';
import { connect } from 'react-redux';
import { doFetchRecipe } from '../../actions/recipe';
import { doChangeQuery, doSetQuery } from '../../actions/query';
import { getQuery, getQueryKey } from '../../selectors/query';
import { getSearch, getMain } from '../../selectors/componentSwitch';
import { doSearchPageSwitch } from '../../actions/componentSwitch';
import Button from './Button';

const SearchButton = ({ 
  onFetchRecipe, 
  query, 
  onChangeQuery,
  onSetQuery,
  queryKey,
  isMain,
  isSearch,
  onSearchPageSwitch,
  children
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
      onFetchRecipe(query);
      //set query to ""; store query to queryKey
      onSetQuery(query, queryKey);  
    }

    event.preventDefault();
  };
 
  const onFocus = () => {
    onSearchPageSwitch(isMain, isSearch);
  }

  return(
    <form 
      onSubmit={onSubmit}
    >
      <input
        onChange={onChange}
        value={query}
        onFocus={onFocus}
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
  onSetQuery: (query, queryKey) => dispatch(doSetQuery(query, queryKey)), 
  onSearchPageSwitch: (isMain, isSearch) => dispatch(doSearchPageSwitch(isMain, isSearch)), 
  //could create several dispatch actions 
});

const mapStateToProps = state => ({
  query: getQuery(state),
  queryKey: getQueryKey(state),
  isSearch: getSearch(state),
  isMain: getMain(state),
})  

/*****connect React Component with Store*****/
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchButton);