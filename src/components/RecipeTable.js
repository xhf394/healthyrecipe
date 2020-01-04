import React from 'react';
import Recipe from './Recipe';

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


const RecipeTableHeader = () => {
  return(
    <div>
      <div className='recipies-header'>
        {Object.keys(COLUMNS).map(column => (
          <span 
            key={column}
            style={{width: COLUMNS[column].width}}
          >
            {COLUMNS[column].label}
          </span>
        ))}
      </div>
    </div>
  )	
};

//recipe list will be passed in from parent
//this will be a reusable component
const RecipeTable = (props) => {
  const { recipies, error } = props;	
  console.log(recipies);
  
  return(
    <div>
      <RecipeTableHeader />
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