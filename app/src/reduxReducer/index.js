import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducerHome } from "./reducerHome";
import { reducerList } from "./reducerList";
import { reducerAddress } from "./reducerAddress";


export default combineReducers({
    reducerHome,
    reducerList,
    reducerAddress,
    routing:routerReducer
})