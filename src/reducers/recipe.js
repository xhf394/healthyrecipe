//*******************This is being updated****************//
//this is the reducer to deal with 
//1. updating state;
//2. state transition
//for recipies list.
//*******************************************************//
import { RECIPIES_ADD } from '../constants/actionTypes';


const INITIAL_STATE = [];

const applyAddRecipies = (state, action) => 
  action.recipies;

function recipeReducer(state = INITIAL_STATE, action) {
    switch(action.type) {    
      //new state
      case RECIPIES_ADD: {
        return applyAddRecipies(state, action);
      }
      
      //default
      default: return state;	
    }
}

export default recipeReducer;


// const INITIAL_STATE = [
//   {
//    food: {
//      foodId: "food_b0bnl8oayiqhs2at63ifxbm6i3o3",  
//       label: 'beef chuck',
//       nutrients: {
//         ENERC_KCAL: 130.0,
//         PROCNT: 21.64,
//         FAT: 4.81,
//         CHOCDF: 0.12
//       },
//       category: 'Generic foods', 
//     }   
//   },
//   { 
//    food: {
//      foodId : "food_b72qbpvbajjqokagar0hoaqw6dkf", 
//      label: 'beef, chuck for stew, separable lean and fat, select, raw',
//       nutrients: {
//         ENERC_KCAL: 124.0,
//         PROCNT: 21.9,
//         FAT: 3.99,
//         CHOCDF: 0.21
//       },
//       category: 'Generic foods',
//       image: 'https://www.edamam.com/food-img/e74/e7477c29517cdc4bcfcc1a0592b54613.jpg', 
//    } 
//   },

//   { 
//    food: {
//        foodId : "food_aozl90mas1a03tactjju9brjfiqj",
//      label: 'Beef Sticks, Angus Beef',
//       nutrients: {
//         ENERC_KCAL: 352.0,
//         PROCNT: 17,
//         FAT: 28,
//         CHOCDF: 3.5
//       },
//       category: 'Generic foods',
//       image: 'https://www.edamam.com/food-img/f1c/f1c7d3484954d91c3c84f56494d3c0ee.jpg', 
//    } 
//   },
// ];