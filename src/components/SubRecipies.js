import React from 'react';
import RecipeTable from './RecipeTable';


const SubRecipies = ({ recipeList, title }) => {
  

  return(
     <div className='subrecipies'>
  	   <h3 className='subrecipies-title'> { title } </h3>
       <RecipeTable
         recipies={recipeList}
       />
     </div>    
  )	
};

export default SubRecipies;


