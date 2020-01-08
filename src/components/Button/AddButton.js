import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { doAddToTotal } from '../../actions/total';

const AddButton = ({ recipe, calories, onAddToTotal }) => {
  
  return(
    <Button
      onClick={() => onAddToTotal(recipe, calories)}
    >
      Add
    </Button>
  )	
};

const mapDispatchToProps = dispatch => ({
  onAddToTotal: (recipe, calories) => dispatch(doAddToTotal(recipe, calories)),	
})
export default connect(
  null,
  mapDispatchToProps,
)(AddButton);

