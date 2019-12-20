import { takeEvery, all } from 'redux-saga/effects';
import { RECIPIES_FETCH } from '../constants/actionTypes';
import { handleFetchRecipies } from './recipe';

function *watchAll() {
  yield all([
    takeEvery(RECIPIES_FETCH, handleFetchRecipies),
    
  ])	
}

export default watchAll;
