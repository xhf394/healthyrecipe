import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { doDecrementTotal } from '../../actions/total';

const DecrementButton = ({recipe, calories, onDecrementTotal, className=''}) => {
  return(
    <Button
      onClick={()=> onDecrementTotal(recipe, calories)}
      className={className}
    >
      -
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