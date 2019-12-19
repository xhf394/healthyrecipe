import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doFetchRecipies } from '../actions/recipe';
import { Button } from './Button';

const SearchRecipies = ({ onFetchRecipies }) => {
  const [ query, setQuery ] = useState('');
  
  //handle change
  const onChange = event => (
    setQuery(event.target.value)
  );
  //handle submission
  const onSubmit = event => {
    if(query) {
      //dispatch an action
      onFetchRecipies(query);  
      setQuery('');
    }

    event.preventDefault();
  };
 
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          type='text'
          value={query}         
        />
        <Button 
          type='submit'
        >
          Search
        </Button>
      </form>
    </div>
  )	
}

//mapDispatchToProps will return an plain object
const mapDispatchToProps = dispatch => ({
  //doFetchRecipies will return an action
  onFetchRecipies: query => dispatch(doFetchRecipies(query)),
});

/*****connect React Component with Store*****/
export default connect(
  null,
  mapDispatchToProps,
)(SearchRecipies);