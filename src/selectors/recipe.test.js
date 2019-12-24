import { getReadableRecipies } from './recipe';

//passes recipe state and 
describe('recipe selector', () => {
  it('retrieves readable recipies', () => {
  	//test logical
  	const recipeState = {
  	  recipies: [
  	    {
  	      food: {
  	        foodId: '123',
  	        label: 'A' 
  	        nutrients:{
              ENERC_KCAL: 1,
              PROCNT: 1,
              FAT: 1,
              CHOCDF: 1,
            },
            category:'A',
          },
        }, 
        {
  	      food: {
  	        foodId: '456',
  	        label: 'A' 
  	        nutrients:{
              ENERC_KCAL: 2,
              PROCNT: 2,
              FAT: 2,
              CHOCDF: 2,
            },
            category:'A',
          },
        }, 
  	  ],
  	  error: null,	
  	};
    
  const archiveState = ['123'];
  const state = { recipeState, archiveState };

  const expectedReadableRecipies = {
  	recipies: [        
  	  {
  	    food: {
  	      foodId: '456',
  	      label: 'A' 
  	      nutrients: {
            ENERC_KCAL: 2,
            PROCNT: 2,
            FAT: 2,
            CHOCDF: 2,
          },
          category:'A',
        },
      },
    ],      
  };
  
  const readableRecipies = getReadableRecipies(state);
  expect(readableRecipies).toEqual(expectedReadableRecipies);
  })	
});