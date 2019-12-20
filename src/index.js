import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './store';
import * as serviceWorker from './serviceWorker';

const recipies = [
  {
  	food: {
  	  foodId: "food_b0bnl8oayiqhs2at63ifxbm6i3o3",	
      label: 'beef chuck',
      nutrients: {
        ENERC_KCAL: 130.0,
        PROCNT: 21.64,
        FAT: 4.81,
        CHOCDF: 0.12
      },
      category: 'Generic foods', 
    }   
  },
  { 
  	food: {
  	  foodId : "food_b72qbpvbajjqokagar0hoaqw6dkf",	
  	  label: 'beef, chuck for stew, separable lean and fat, select, raw',
      nutrients: {
        ENERC_KCAL: 124.0,
        PROCNT: 21.9,
        FAT: 3.99,
        CHOCDF: 0.21
      },
      category: 'Generic foods',
      image: 'https://www.edamam.com/food-img/e74/e7477c29517cdc4bcfcc1a0592b54613.jpg',	
  	}	
  },

  { 
  	food: {
  	  	foodId : "food_aozl90mas1a03tactjju9brjfiqj",
  	  label: 'Beef Sticks, Angus Beef',
      nutrients: {
        ENERC_KCAL: 352.0,
        PROCNT: 17,
        FAT: 28,
        CHOCDF: 3.5
      },
      category: 'Generic foods',
      image: 'https://www.edamam.com/food-img/f1c/f1c7d3484954d91c3c84f56494d3c0ee.jpg',	
  	}	
  },
];

// function render() {
//   ReactDOM.render(
//     <App 
//       recipies={getReadableRecipies(store.getState())} 
//       onArchive={id=> store.dispatch(doArchiveRecipe(id))}
//     />, 
//     document.getElementById('root')
//   );	
// }



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
//when state updated in store, 
//subscribe will execute ==> 
//render again
//store.subscribe(render);
//render the component once when the application starts
//render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
