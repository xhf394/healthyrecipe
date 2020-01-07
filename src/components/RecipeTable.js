import React from 'react';
import Recipe from './Recipe';
import TableHeader from './TableHeader';

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
  nutrients: {
  	label: 'Nutrients',
  	width: '30%',
  },
  addToRecipe: {
  	label: 'Add to Recipe',
  	width: '15%',
  }
};



//recipe list will be passed in from parent
//this will be a reusable component
const RecipeTable = (props) => {
  const { recipies, error } = props;	
  console.log(recipies);
  
  return(
    <div>
      <TableHeader 
        COLUMNS={COLUMNS}
      />
      {error && <p> Something Went Wrong ... </p>}
      {(recipies||[]).map(recipe => (
        <Recipe 
          key={recipe.foodId}
          columns={COLUMNS}
          recipe={recipe}
        />
      ))}
    </div>
  )	
};


export default RecipeTable;