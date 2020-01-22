import React from 'react';
import Recipe from './Recipe';
import TableHeader from './TableHeader';

/*******Table Header******/

const COLUMNS = {
  label: {
    label: 'Label',
    width: '25%',
  },
  qty: {
  	label: 'Qty',
  	width: '10%',
  },
  unit: {
  	label: 'Unit',
  	width: '10%',
  },
  energy: {
  	label: 'Energy',
  	width: '15%',
  },
  nutrients: {
  	label: 'Nutrients',
  	width: '25%',
  },
  addToRecipe: {
  	label: 'Add',
  	width: '15%',
  }
};



//recipe list will be passed in from parent
//this will be a reusable component
const RecipeTable = (props) => {
  const { recipies, error } = props;	
  console.log(recipies);
  
  return(
    <div className='table-body'>
      <TableHeader 
        COLUMNS={COLUMNS}
      />
      {error && <p> Something Went Wrong ... </p>}
      <div className='table-content'>
      {(recipies||[]).map(recipe => (
        <Recipe 
          key={recipe.foodId}
          columns={COLUMNS}
          recipe={recipe}
        />
      ))}
     </div> 
    </div>
  )	
};


export default RecipeTable;