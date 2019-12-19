import React from 'react';
import { connect } from 'react-redux';
import { doArchiveRecipe } from '../actions/archive';
import './Recipe.css';
import { Button } from './Button'

const Recipe = ({ recipe, columns, onArchive, id }) => {
  const { food } = recipe;

  return (
    <div className='recipe'>
      <span style={{width: columns.category.width}}> {food.category}</span>
      <span style= {{width:columns.image.width, height: '50px'}}> {food.image ? <img style={{width: '50px'}} src={food.image} alt=""/> : <span></span> }</span>	
      <span style={{width: columns.label.width}}> {food.label}</span>
      <span style={{width: columns.calorie.width}}> {food.nutrients.ENERC_KCAL}</span>
      <span style={{width: columns.archive.width}} >
        <Button
          className='button-inline'
          onClick={() => onArchive(id)}
        >
          Archive
        </Button>
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