import React from 'react';
import { connect } from 'react-redux';
import {
  //getReadableRecipies,
  getFetchError, 
} from '../selectors/recipe';
import './Recipies.css';
import { SearchButton, ReviewButton } from './Button';
import Recipe from './Recipe';

const COLUMNS = { 
  category: {
  	label: 'Category',
  	width: '20%',
  },
  image: {
  	label: 'Image',
  	width: '20%',
  },
  label: {
  	label: 'Label',
  	width: '30%',
  },
  calorie: {
  	label: 'Calorie',
  	width: '20%'
  },
  archive: {
    width: '10%'
  }
}


const Recipies = ({ recipies, error }) =>{

  return (
    <div className='recipies'>
      <SearchButton>
        Search More
      </SearchButton>
      <ReviewButton>
        Review
      </ReviewButton>  
      
      <RecipiesHeader columns={COLUMNS} />
                 

      <h3>Can ignore ~ This is the main page ~</h3>
    </div>
  )	
}

const RecipiesHeader = ({ columns }) => 
  <div className='recipies-header'>
    {Object.keys(columns).map(key => (
      <span
        key={key}
        style={{width: columns[key].width}}
      > 
       {columns[key].label}
      </span>
    ))}
  </div>

//mapStateToProps has subscribe function

const mapStateToProps = state => ({
  //recipies: getReadableRecipies(state),
  error: getFetchError(state),
});

export default connect(
  mapStateToProps
)(Recipies);

/************
      { error && <p className='error'>Something went wrong ...</p>}      
      {(recipies || []).map(recipe => (
        <Recipe 
          key={recipe.food.foodId}
          recipe={recipe}
          columns={COLUMNS}
          id={recipe.food.foodId}
        />
      ))}
      ***************/