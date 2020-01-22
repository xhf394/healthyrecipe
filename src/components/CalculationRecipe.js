import React from 'react';
import { DeleteButton, AddButton, DecrementButton } from './Button';

const CalculationRecipe = ({ isEdit, recipe, quantity, columns }) => 
  <div className='row-reverse pt-2 pb-2 recipe justify-content-bwt'>
    <span style={{width: columns.label.width}}> {recipe.label}</span>
    <span style={{width: columns.qty.width}}> 100</span>
    <span style={{width: columns.unit.width}}> g</span>
    <span style={{width: columns.energy.width}}> {recipe.nutrients.ENERC_KCAL}</span>	
    <span style={{width: columns.calculation.width}}>
      <div className='calculation-selnum'> 
        {
          isEdit&&
            <DeleteButton
            recipe={recipe}
            calories={recipe.nutrients.ENERC_KCAL}
            className='button-delete'
          />
        }
        {
          !isEdit && 
          <div className='row-reverse'>
            <DecrementButton
              recipe={recipe}
              calories={recipe.nutrients.ENERC_KCAL}
              className='button-calculation'
            />
            <div className='calculation-textwrap'>{ quantity }</div>
            <AddButton
              recipe={recipe}
              calories={recipe.nutrients.ENERC_KCAL}
              className='button-calculation'
            />
          </div>
        } 
      </div> 
    </span> 
  </div>


export default CalculationRecipe;  