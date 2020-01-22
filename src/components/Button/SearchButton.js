import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { doSetQuery } from '../../actions/query';
import { doFetchRecipe } from '../../actions/recipe'; 

const SearchButton = ({ onFetchRecipe, onSetQuery, query, children }) => {
  
  const onClick = event => {
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
    <Button
      onClick={onClick}
      className='button-suggest-item'
    >
      {children}
    </Button>
  )	
}

const mapDispatchToProps = dispatch => ({
  onFetchRecipe: query => dispatch(doFetchRecipe(query)),
  onSetQuery: query => dispatch(doSetQuery(query)), 
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchButton);  