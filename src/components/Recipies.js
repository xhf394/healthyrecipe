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
    <div className='main-recipies row'>     
      
      <div className='main-recipies-head sect-nmll5 sect-nmr15'>
        <div className='main-recipies-title'>
          <h3>Choose Your Food !</h3>
        </div>
      
        <div className='main-recipies-searchbar'>
          <MainPageSearchButton>
            Search
          </MainPageSearchButton>

        </div>
      </div>

      {Object.keys(mainRecipies).map(subRecipies => (
        <SubRecipies
          key={subRecipies}
          title={subRecipies}
          recipeList={mainRecipies[subRecipies]}
        />
      ))}
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