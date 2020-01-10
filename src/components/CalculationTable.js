import React from 'react';
import Recipe from './Recipe';
import TableHeader from './TableHeader';
import CalculationRecipe from './CalculationRecipe';

/*******Table Header******/

const COLUMNS = {
  label: {
    label: 'Label',
    width: '20%',
  },
  qty: {
  	label: 'Qty',
  	width: '10%',
  },
  unit: {
  	label: 'Unit',
  	width: '5%',
  },
  energy: {
  	label: 'Energy',
  	width: '10%',
  },
  calculation: {
  	width: '40%',
  }
};


//recipe list will be passed in from parent
//this will be a reusable component
const CalculationTable = ({isEdit, recipeList, quantityListById}) => {
	  
  return(
    <div>
      <TableHeader 
        COLUMNS={COLUMNS}
      />
      {(recipeList || []).map(recipe => (
        <CalculationRecipe
          key={recipe.foodId}
          isEdit={isEdit}
          recipe={recipe}
          columns={COLUMNS}
          quantity={quantityListById[recipe.foodId]}
        />

      ))}      
    </div>
  )	
};


export default CalculationTable;