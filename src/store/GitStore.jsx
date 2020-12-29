import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedSagas from '../sagas/rootSagas';
import rootReducer from '../reducers/rootReducer';

const configureStore = () => {
   const sagaMiddleWare = createSagaMiddleware();
   const middleWares = [sagaMiddleWare];
   const composables = [applyMiddleware(...middleWares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   ];
   const enhancer = compose(...composables);
   const store = createStore(rootReducer, enhancer);
   combinedSagas.map(saga => (sagaMiddleWare.run(saga)));

   return store;
};

export default configureStore;