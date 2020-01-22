import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchPageSearchButton, BackButton } from './Button';
import { getReadableRecipe, getFetchError, getSuggestedList } from '../selectors/recipe';
import RecipeTable from './RecipeTable';
import { SearchButton } from './Button';
import { getQueryList } from '../selectors/query';

const SearchRecipies = ({ recipe, error, queryList, suggestedList }) => {
  
  return(
    <div className='search-recipies '>
      {/*****************Search Bar for Search Page*******************/}
      <div className='search-recipies-bd sect-nmll5 sect-nmr15 row-reverse'>
        <div className='search-recipies-head row-reverse'>
          <SearchPageSearchButton> Search </SearchPageSearchButton>
          <BackButton className='button-nb' />
        </div>
      </div>
      
      <div className='search-suggestions-views sect-nmll5 sect-nmr15'>

        <div className='search-suggestions search-table'>  
          {/******************Search Table for result*********************/}      
          {recipe.length ?  
            <RecipeTable 
            recipies={recipe}
            error={error}
          >
          </RecipeTable>
          : null} 

          {/***********************Search History*************************/}
          <div>
            <div> <p> Recent Searched </p></div>
            {(queryList || []).map( (searchItem, index) => (
              <SearchButton
                key={index}
                query={searchItem}
              >
                {searchItem}
              </SearchButton>
            ))}
          </div>
        </div>

        <div className='search-suggestions'>
          {/********************Suggest List for Search*******************/}
          <div> <p> Suggested List </p></div>
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