import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchButton, BackButton, ReviewButton } from './Button';
import { getReadableRecipe, getFetchError } from '../selectors/recipe';
import RecipeTable from './RecipeTable';

const SearchRecipies = ({ recipe, error }) => {
  
  return(
    <div>
      <div className='search-recipies'>
        <SearchButton> Search </SearchButton>
        <BackButton />
        <ReviewButton> Review </ReviewButton>
      </div>
      
      <div>  
        <RecipeTable 
          recipies={recipe}
          error={error}
        >
        </RecipeTable> 
      </div>
    </div>
  )	
}

const mapStateToProps = state => ({
  recipe: getReadableRecipe(state),
  error: getFetchError(state),
});

export default connect(
  mapStateToProps,
)(SearchRecipies);