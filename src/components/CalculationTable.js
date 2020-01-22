import React from 'react';
import Recipe from './Recipe';
import TableHeader from './TableHeader';
import CalculationRecipe from './CalculationRecipe';

/*******Table Header******/

const COLUMNS = {
  label: {
    label: 'Label',
    width: '25%',
  },
  qty: {
  	label: 'Qty',
  	width: '15%',
  },
  unit: {
  	label: 'Unit',
  	width: '15%',
  },
  energy: {
  	label: 'Energy',
  	width: '15%',
  },
  calculation: {
  	width: '30%',
  }
};


//recipe list will be passed in from parent
//this will be a reusable component
const CalculationTable = ({isEdit, recipeList, quantityListById}) => {
	  
  return(
    <div className='calculation-table sect-nmr15 sect-nmll5'>

        <div className='table-body'>
      <TableHeader 
        COLUMNS={COLUMNS}
      />
      
      <div className='table-content'>
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
    </div>
    </div>

  )	
};


export default CalculationTable;