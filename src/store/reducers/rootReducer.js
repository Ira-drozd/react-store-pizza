import {combineReducers} from 'redux'
import pizzasReducer from "./pizzas";

export default combineReducers({
pizzas: pizzasReducer
})