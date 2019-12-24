import { doAddRecipies } from './recipe';

describe('recipe action', () => {
  it('add recipies', () => {
    //neccessary arguments
    const recipies = ['a', 'b', 'c'];
    

    const action = doAddRecipies(recipies);

    const expectedAction = {
      type: 'RECIPIES_ADD',
      recipies,  	
    };

    expect(action).toEqual(expectedAction);;
  });	
});