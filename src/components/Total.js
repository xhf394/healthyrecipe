import React from 'react';
import { connect } from 'react-redux';
import EditPage from './EditPage';
import CalculationPage from './CalculationPage';
import { getEdit } from '../selectors/componentSwitch';

const Total = ({isEdit}) => {

  return(
    <div> 
     { isEdit && <EditPage />}
     {!isEdit && <CalculationPage />}
    </div>
  )	
};



const mapStateToProps = state => ({
  isEdit: getEdit(state),
});

export default connect(
  mapStateToProps,	
)(Total);