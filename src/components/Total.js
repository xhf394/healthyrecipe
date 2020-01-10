import React from 'react';
import { connect } from 'react-redux';
import EditPage from './EditPage';
import CalculationPage from './CalculationPage';
import { getEdit } from '../selectors/componentSwitch';
import { getRecipeList, getQuantityListById, getTotalValue } from '../selectors/total';
import CalculationTable from './CalculationTable';

const Total = ({ totalValue, isEdit, recipeList, quantityListById }) => {

  return(
    <div> 
      {/*******Switch Header Calculation / Edit*******/}
      { isEdit && <EditPage /> }
      {!isEdit && <CalculationPage />}


      {/*******Calculation Table*********/}
      <CalculationTable 
        recipeList={recipeList}
        quantityListById={quantityListById}
        isEdit={isEdit} 
      />


      {/********Total Value***********/}
      <h2>Total Value: {totalValue}</h2>
    </div>
  )	
};



const mapStateToProps = state => ({
  totalValue: getTotalValue(state),	
  isEdit: getEdit(state),
  recipeList: getRecipeList(state),
  quantityListById: getQuantityListById(state),
});

export default connect(
  mapStateToProps,	
)(Total);