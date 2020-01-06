import React from 'react';
import RecipeTable from './RecipeTable';


const SubRecipies = ({ recipeList, title }) => {
  

  return(
     <div>
  	   <h2> { title } </h2>
       <RecipeTable
         recipies={recipeList}
       />
     </div>    
  )	
};

export default SubRecipies;


