import React from 'react';
import { connect } from 'react-redux';
import Recipies from './Recipies';
import SearchRecipies from './SearchRecipies';
import { getSearch } from '../selectors/componentSwitch'; 
import './MainRecipies.scss';

const MainRecipies = ({ isSearch }) => {
  console.log(isSearch);
  return(
    <div>
      <div>
        {!isSearch && <Recipies />}
        {isSearch && <SearchRecipies />}
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