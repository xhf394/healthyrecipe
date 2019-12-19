import { 
  RECIPIES_FETCH,
  RECIPIES_ADD
} from '../constants/actionTypes';


const doAddRecipies = recipies => ({
  type: RECIPIES_ADD,
  recipies, 
});


const doFetchRecipies = query => ({
  type: RECIPIES_FETCH,
  query,   
});

export {
  doAddRecipies,
  doFetchRecipies,	
};