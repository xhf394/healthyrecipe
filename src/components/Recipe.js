import React from 'react';
import { connect } from 'react-redux';
import { doArchiveRecipe } from '../actions/archive';
import './Recipe.css';
import { AddButton, DecrementButton } from './Button';


const Recipe = ({ recipe, columns, onArchive }) => {
  
  const addToRecipe = () => {

  }

  return (
    <div className='recipies-header'>
      <span style={{width: columns.label.width}}> {recipe.label}</span>	
      <span style={{width: columns.qty.width}}> 100</span>
      <span style={{width: columns.unit.width}}> g</span>
      <span style={{width: columns.energy.width}}> {recipe.nutrients.ENERC_KCAL}</span>
      <span style={{width: columns.nutrients.width}}> {`Fat: ${recipe.nutrients.FAT}`}</span>
      <span style={{width: columns.addToRecipe.width}} >
        <AddButton
          className='button-inline'
          recipe={recipe}
          calories={recipe.nutrients.ENERC_KCAL}
        >
          Add
        </AddButton>
        <DecrementButton
          recipe={recipe}
          calories={recipe.nutrients.ENERC_KCAL}
        >
          Decrement
        </DecrementButton>
      </span>     
    </div>
  )
}





const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveRecipe(id)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Recipe);