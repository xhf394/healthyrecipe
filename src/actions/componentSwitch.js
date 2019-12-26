import {
  MAIN_PAGE,
  SEARCH_PAGE,
  CACULATION_PAGE,
  EDIT_PAGE,	
} from '../constants/actionTypes';

const doMainPageSwitch = (isMain, isSearch) => ({
  type: MAIN_PAGE,
  isMain,
  isSearch,	
});

const doSearchPageSwitch = (isMain, isSearch) => ({
  type: SEARCH_PAGE,
  isMain,
  isSearch,	
});

const doCaculationPageSwitch = (isMain, isEdit) => ({
  type: CACULATION_PAGE,
  isMain,
  isEdit,	
});

const doEditPageSwitch = (isMain, isEdit) => ({
  type: EDIT_PAGE,
  isMain,
  isEdit,	
});

export {
  doMainPageSwitch,
  doSearchPageSwitch,
  doCaculationPageSwitch,
  doEditPageSwitch,	
}