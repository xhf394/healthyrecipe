import React from 'react';
import { DeleteButton, AddButton, DecrementButton } from './Button';

const CalculationRecipe = ({ isEdit, recipe, quantity, columns }) => 
  <div className='recipies-header'>
    <span style={{width: columns.label.width}}> {recipe.label}</span>
    <span style={{width: columns.qty.width}}> 100</span>
    <span style={{width: columns.unit.width}}> g</span>
    <span style={{width: columns.energy.width}}> {recipe.nutrients.ENERC_KCAL}</span>	
    <span style={{width: columns.calculation.width}}>
      {
      	isEdit 
        &&<DeleteButton
            recipe={recipe}
            calories={recipe.nutrients.ENERC_KCAL}
          />
      }
      {!isEdit && 
      	<>
        <AddButton
          recipe={recipe}
          calories={recipe.nutrients.ENERC_KCAL}
        />
        <span>{ quantity }</span>
        <DecrementButton
          recipe={recipe}
          calories={recipe.nutrients.ENERC_KCAL}
        />
        </>}  
    </span> 

    <div>
    </div>  

  </div>


export default CalculationRecipe;  