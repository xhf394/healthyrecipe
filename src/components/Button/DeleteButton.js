import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { doDeleteFromTotal } from '../../actions/total';

const DeleteButton = ({recipe, calories, onDeleteFromTotal, className=''}) => 
  <Button
    onClick={() => onDeleteFromTotal(recipe, calories)}
    className={className}
  >
    Delete
  </Button>


const mapDispatchToProps = dispatch => ({
  onDeleteFromTotal: (recipe, calories) => dispatch(doDeleteFromTotal(recipe, calories),)
});

export default connect(
  null,
  mapDispatchToProps,
)(DeleteButton);  