import React from 'react';
import { connect } from 'react-redux';
import Recipies from './Recipies';
import SearchRecipies from './SearchRecipies';
import { getSearch } from '../selectors/componentSwitch';
import { ReviewButton } from './Button'; 
import './MainRecipies.scss';

const MainRecipies = ({ isSearch }) => {
  console.log(isSearch);
  return(
    <div className='main-page'>
      <div className='main-page-body'>
        {!isSearch && <Recipies />}
        {isSearch && <SearchRecipies />}
      </div>

      <div className='main-page-footer row-reverse sect-nmr15 sect-nmll5'>
        <div className='footer-textwrap'>
         Checkout More Here 
        </div>
        <ReviewButton className='button-footer'>
          Review
        </ReviewButton>
      </div>  
    </div>
  )	
};

const mapStateToProps = state => ({
  isSearch: getSearch(state),	
})

export default connect(
  mapStateToProps,
)(MainRecipies);