import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Recipies from './Recipies';
//https://api.edamam.com/api/food-database/parser?session=44&ingr=orange&app_id=01ac8168&app_key=19280b66ad58dad7a51dea6bdd896993


// const App = ({recipies, onArchive}) => (
//   <div className='app'>
//     <Recipies 
//       recipies={recipies}
//       onArchive={onArchive}
//       />
//   </div>	
// )


const App = () => (
  <div className='app'>
    <Recipies />
  </div>	
)

export default App;