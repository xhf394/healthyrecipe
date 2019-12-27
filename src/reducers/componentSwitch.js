import {
  SEARCH_PAGE,
  MAIN_PAGE,
  EDIT_PAGE,
  CACULATION_PAGE,	
} from '../constants/actionTypes';

const INITIAL_STATE = {
  isMain: true,
  isSearch: false,
  isEdit: false,
}

function componentSwitchReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
  	case MAIN_PAGE: {
  	  return {...state, isMain: true, isSearch: false}; 
  	}
  	case SEARCH_PAGE: {
      return {...state, isMain: true, isSearch: true, query: action.query};
  	}
  	case CACULATION_PAGE: {
      return {...state, isMain: false, isEdit: false};
  	}
  	case EDIT_PAGE: {
      return {...state, isMain: false, isEdit: true}
  	}
    default: return state;
  }	
}

export default componentSwitchReducer;