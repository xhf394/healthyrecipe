import { createStore } from 'redux';
import rootReducer from '../reducers';

//store only take one reducer;
const store = createStore(
  rootReducer
);

export default store;