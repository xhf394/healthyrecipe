import deepFreeze from 'deep-freeze';
import recipeReducer from '.recipe';

//***************thoughts flow************//
//reducer is pure function with no side effects;
//passes same state and action ==> returns same result

describe('recipe reducer', () => {
  it('adds recipies to the recipe state', () => {
  	const recipies = ['a', 'b', 'c'];

  	const action = {
  	  type: 'RECIPIES_ADD',
  	  recipies,
  	};

  	const previousState = {recipies: [], error: null};
  	const expectedNewState = {stories, error: null};
    
    deepFreeze(previousState);
  	const newState = recipeReducer(previousState, action);
  	expect(newState).toEqual(expectedNewState);;
  });	
});
