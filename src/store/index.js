import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

//************store is a big warehouse***********//

const logger = createLogger();
const saga = createSagaMiddleware();

//store only take one reducer;
const store = createStore(
  rootReducer,
  undefined, 
  composeWithDevTools(                                                                                                                                                                                                                                                                                                                                                                             
    applyMiddleware(saga, logger),
  )  
);

saga.run(rootSaga);


export default store;