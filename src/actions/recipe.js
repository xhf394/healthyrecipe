import { 
  RECIPIES_FETCH,
  RECIPIES_ADD,
  RECIPIES_FETCH_ERROR,
} from '../constants/actionTypes';


const doAddRecipies = recipies => ({
  type: RECIPIES_ADD,
  recipies, 
});


const doFetchRecipies = query => ({
  type: RECIPIES_FETCH,
  query,   
});

const  doFetchErrorRecipies = error => ({
  type: RECIPIES_FETCH_ERROR,
  error,	
});

export {
  doAddRecipies,
  doFetchRecipies,
  doFetchErrorRecipies,	
};