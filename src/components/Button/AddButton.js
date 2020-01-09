import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { doIncrementTotal } from '../../actions/total';

const AddButton = ({ recipe, calories, onIncrementTotal }) => {
  
  return(
    <Button
      onClick={() => onIncrementTotal(recipe, calories)}
    >
      Add
    </Button>
  )	
};

const mapDispatchToProps = dispatch => ({
  onIncrementTotal: (recipe, calories) => dispatch(doIncrementTotal(recipe, calories)),	
})
export default connect(
  null,
  mapDispatchToProps,
)(AddButton);

