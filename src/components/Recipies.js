import React from 'react';
import { connect } from 'react-redux';
import {
  getMainRecipies,
  getFetchError, 
} from '../selectors/recipe';
import './Recipies.css';
import { MainPageSearchButton, ReviewButton } from './Button';
import SubRecipies from './SubRecipies';

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


const Recipies = ({ mainRecipies, error }) =>{

  return (
    <div className='recipies'>
      <MainPageSearchButton>
        Search More
      </MainPageSearchButton>
      <ReviewButton>
        Review
      </ReviewButton>  
                 
      {Object.keys(mainRecipies).map(subRecipies => (
        <SubRecipies
          key={subRecipies}
          title={subRecipies}
          recipeList={mainRecipies[subRecipies]}
        />
      ))}
      <h3>Can ignore ~ This is the main page ~</h3>
    </div>
  )	
}

//mapStateToProps has subscribe function

const mapStateToProps = state => ({
  //recipies: getReadableRecipies(state),
  error: getFetchError(state),
  mainRecipies: getMainRecipies(state),
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