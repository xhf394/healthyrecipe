import React from 'react';
import { connect } from 'react-redux';
import EditPage from './EditPage';
import CalculationPage from './CalculationPage';
import { getEdit } from '../selectors/componentSwitch';
import { getRecipeList, getQuantityListById, getTotalValue } from '../selectors/total';
import CalculationTable from './CalculationTable';
import { EditButton, BackButton, ReviewButton } from './Button';

const Total = ({ totalValue, isEdit, recipeList, quantityListById }) => {

  return(
    <div className='total-page'> 
      {/*******Switch Header Calculation / Edit*******/}
      <div className='total-hd sect-nmr15 sect-nmll5 row-reverse'>
        <div className='total-hd-title'><p>Calculate Your Daily Calorie</p></div>
        {!isEdit && <div> <BackButton className='button-nb' /> <EditButton className='button-nb' /> </div> }
        { isEdit && <ReviewButton className='button-nb'> Done </ReviewButton>}
      </div>
      <div className='total-table'>
        {/*******Calculation Table*********/}
        {recipeList.length 
          ? <div className='total-cart'>
              <div className='total-cart-hd sect-nmr15 sect-nmll5'>
                <div className='item'>Check Total Calorie of Your Food~ </div>
                <div className='item'>Good to know the Details </div>
              </div>
              <CalculationTable 
                recipeList={recipeList}
                quantityListById={quantityListById}
                isEdit={isEdit} 
             />
            </div>
          : <div className='total-noCart'>
              <div className='noCart-container'>
                <div className='img'></div>
                <div className='txt'> 
                  <div className='noCart-title'>Add Some Food First </div>
                  <BackButton className='button-noCart'/>
                </div>
              </div>
            </div>
        }
      </div>  

      {/********Total Value***********/}
      <div className='total-value row-reverse justify-content-center'>
        <div>
          Let's See the Total Kcal
        </div>
        <div className='value'> 
          {totalValue} Kcal
        </div>
      </div>
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