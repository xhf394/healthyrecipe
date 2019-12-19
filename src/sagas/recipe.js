import { call, put } from 'redux-saga/effects';
import { doAddRecipies } from '../actions/recipe';


//https://api.edamam.com/api/food-database/parser?session=44&ingr=orange&app_id=01ac8168&app_key=19280b66ad58dad7a51dea6bdd896993
let query;
const app_id = '01ac8168';
const app_key = '19280b66ad58dad7a51dea6bdd896993'
const RECIPE_BASE_URL = `https://api.edamam.com/api/food-database/parser?ingr=${query}&app_id=01ac8168&app_key=19280b66ad58dad7a51dea6bdd896993`;

const fetchRecipies = query => 
  fetch(`https://api.edamam.com/api/food-database/parser?ingr=${query}&app_id=01ac8168&app_key=19280b66ad58dad7a51dea6bdd896993`)
    .then(response => response.json());

function* handleFetchRecipies(action) { 
  //get query from action(specific interaction) like click button
  const { query } = action;
  const result = yield call(fetchRecipies, query);
  yield put(doAddRecipies(result.hints));
}

export {
  handleFetchRecipies,	
}