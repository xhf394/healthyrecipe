import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { doDecrementTotal } from '../../actions/total';

const DecrementButton = ({recipe, calories, onDecrementTotal}) => {
  

  
  return(
    <Button
      onClick={()=> onDecrementTotal(recipe, calories)}
    >
      Decrement
    </Button> 
  )	
}

const mapDispatchToProps = dispatch => ({
  onDecrementTotal: (recipe, calories) => dispatch(doDecrementTotal(recipe, calories)),	
  
})

export default connect(
  null,
  mapDispatchToProps,
)(DecrementButton);