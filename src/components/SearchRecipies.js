import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchButton, BackButton, ReviewButton } from './Button';
import { getReadableRecipe } from '../selectors/recipe';
import RecipeTable from './RecipeTable';

const SearchRecipies = ({recipe}) => {
  

  return(
    <div>
      <div className='search-recipies'>
        <SearchButton> Search </SearchButton>
        <BackButton />
        <ReviewButton> Review </ReviewButton>
      </div>
      
      <div>
      {recipe.map(item => (
        <div> {item.label} </div>
      ))}
      
      <RecipeTable /> 
  
      </div>
    </div>
  )	
}

const mapStateToProps = state => ({
  recipe: getReadableRecipe(state),
});

export default connect(
  mapStateToProps,
)(SearchRecipies);