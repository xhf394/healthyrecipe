import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { getMain, getEdit } from '../../selectors/componentSwitch';
import { doEditPageSwitch } from '../../actions/componentSwitch';

const EditButton = ({
  isMain,
  isEdit,
  onEditPage,
  className=''
}) => {
  
  const onClick = () => {
    onEditPage(isMain, isEdit);
  };

  return(
    <Button
      onClick={onClick}
      className={className}
    >
      Edit
    </Button>
  )
};


const mapStateToProps = state => ({
  isMain: getMain(state),
  isEdit: getEdit(state),
});

//set isMain: false,
//isEdit: true
const mapDispatchToProps = dispatch => ({
  onEditPage: (isMain, isEdit) => dispatch(doEditPageSwitch(isMain, isEdit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditButton);