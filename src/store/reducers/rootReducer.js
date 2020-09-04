import {combineReducers} from 'redux'
import pizzasReducer from "./pizzas";
import cartReducer from "./cart";

export default combineReducers({
    pizzas: pizzasReducer,
    cart: cartReducer
})