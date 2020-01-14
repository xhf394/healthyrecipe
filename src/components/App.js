import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './App.scss';
import MainRecipies from './MainRecipies';
import Total from './Total';
import { getMain } from '../selectors/componentSwitch';
//https://api.edamam.com/api/food-database/parser?session=44&ingr=orange&app_id=01ac8168&app_key=19280b66ad58dad7a51dea6bdd896993


// const App = ({recipies, onArchive}) => (
//   <div className='app'>
//     <Recipies 
//       recipies={recipies}
//       onArchive={onArchive}
//       />
//   </div>	
// )


const App = ({ isMain }) => (	
  <div className='container app'>
      {isMain&&<MainRecipies />}
      {!isMain&&<Total />}
  </div>	
)

const mapStateToProps = state => ({
  isMain: getMain(state), 	
})

export default connect(
  mapStateToProps,
)(App);

