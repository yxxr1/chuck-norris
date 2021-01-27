import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import saga from './saga'
import syncState from './middleware/syncState'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, syncState)
);

sagaMiddleware.run(saga)

export default store;