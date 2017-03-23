import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "../reduxReducer";


const saga = createSagaMiddleware();
const logger = createLogger({collapsed:true});
const middleware = [thunk,saga,logger];


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    )
);

export default store;