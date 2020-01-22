import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import {
  getMain,
  getEdit	
} from '../../selectors/componentSwitch';
import { doCaculationPageSwitch } from '../../actions/componentSwitch';

const ReviewButton = ({
  isMain,
  isEdit,
  onCaculationPage,	
  children,
  className=''
}) => {
  
  const onClick = () => {
    onCaculationPage(isMain, isEdit);
  }

  return(
    <Button 
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  )
};

const mapStateToProps = state => ({
  isMain: getMain(state), 
  isEdit: getEdit(state),
});

const mapDispatchToProps = dispatch => ({
  onCaculationPage: (isMain, isEdit) => dispatch(doCaculationPageSwitch(isMain, isEdit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewButton);
