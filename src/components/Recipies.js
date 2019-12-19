import React from 'react';
import { connect } from 'react-redux';
import { getReadableRecipies } from '../selectors/recipe';
import './Recipies.css';

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


const Recipies = ({ recipies }) =>{
  
  return (
    <div className='recipies'>
      <RecipiesHeader columns={COLUMNS} />
      
      {(recipies || []).map(recipe => (
        <Recipe 
          key={recipe.food.foodId}
          recipe={recipe}
          columns={COLUMNS}
          id={recipe.food.foodId}
        />
      ))}
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
  recipies: getReadableRecipies(state),
});

export default connect(
  mapStateToProps
)(Recipies);
