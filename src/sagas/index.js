import { takeEvery, all } from 'redux-saga/effects';
import { RECIPE_FETCH } from '../constants/actionTypes';
import { handleFetchRecipies } from './recipe';

function *watchAll() {
  yield all([
    takeEvery(RECIPE_FETCH, handleFetchRecipies),
    
  ])	
}

export default watchAll;
