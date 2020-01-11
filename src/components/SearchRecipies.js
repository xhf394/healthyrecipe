import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchPageSearchButton, BackButton, ReviewButton } from './Button';
import { getReadableRecipe, getFetchError, getSuggestedList } from '../selectors/recipe';
import RecipeTable from './RecipeTable';
import { SearchButton } from './Button';
import { getQueryList } from '../selectors/query';

const SearchRecipies = ({ recipe, error, queryList, suggestedList }) => {
  
  return(
    <div>
      <div className='search-recipies'>
        <SearchPageSearchButton> Search </SearchPageSearchButton>
        <BackButton />
        <ReviewButton> Review </ReviewButton>
      </div>
      
      <div>  
        <RecipeTable 
          recipies={recipe}
          error={error}
        >
        </RecipeTable> 

      {/******************Search History*********************/}
      <div>
        <h2> Recent Searched </h2>
        {(queryList || []).map( (searchItem, index) => (
          <SearchButton
            key={index}
            query={searchItem}
          >
            {searchItem}
          </SearchButton>
        ))}
      </div>
      {/***************Suggest List for Search***************/}

      <div>
        <h2> Suggested List </h2>
        {(suggestedList || []).map( (searchItem, index) => (
          <SearchButton
            key={index}
            query={searchItem}
          >
            {searchItem}
          </SearchButton>
        ))}
      </div>
      </div>
    </div>
  )	
}

const mapStateToProps = state => ({
  recipe: getReadableRecipe(state),
  error: getFetchError(state),
  queryList: getQueryList(state),
  suggestedList: getSuggestedList(state),
});

export default connect(
  mapStateToProps,
)(SearchRecipies);