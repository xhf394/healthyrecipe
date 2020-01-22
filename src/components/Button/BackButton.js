import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { getSearch, 
	     getMain } from '../../selectors/componentSwitch';
import { doMainPageSwitch } from '../../actions/componentSwitch';


const BackButton = ({
  isMain, 
  isSearch,
  onMainPageSwitch,
  className=''
}) => {
  
  const onClick = () => {
    onMainPageSwitch(isMain, isSearch)
  }; 

  return(
    <Button
      onClick={onClick}
      className={className}
    >
      Back
    </Button>
  )
};

const mapStateToProps = state => ({
  isSearch: getSearch(state),
  isMain: getMain(state),	
});

const mapDispatchToProps = dispatch => ({
  onMainPageSwitch: (isMain, isSearch) => dispatch(doMainPageSwitch(isMain, isSearch)),	
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BackButton);