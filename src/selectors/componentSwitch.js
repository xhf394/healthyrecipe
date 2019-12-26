//get one data;

//isMain state
const getMain = ({ componentSwitchState }) => 
  componentSwitchState.isMain;

//isSearch state
const getSearch = ({ componentSwitchState }) => 
  componentSwitchState.isSearch;

//isEdit state
const getEdit = ({ componentSwitchState }) => 
  componentSwitchState.isEdit;


export {
  getMain,
  getSearch,
  getEdit,	
};