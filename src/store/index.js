import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

//************store is a big warehouse***********//

const logger = createLogger();

//store only take one reducer;
const store = createStore(
  rootReducer,
  undefined,                                                                                                                                                                                                                                                                                                                                                                              
  applyMiddleware(logger)
);

export default store;