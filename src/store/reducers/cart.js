import {
    CLEAR_CART,
    EDIT_CART,
    GET_ALL_PRICE,
    GET_CART_ITEM,
    GET_COUNT
} from "../actions/actionTypes";

const initialState = {
    cartItems: {},
    allPrice: 0,
    count: 0
}

const cartReducer=(state = initialState, action)=> {
    switch (action.type) {
        case GET_CART_ITEM:
            return {
                ...state, cartItems: {...state.cartItems, ...action.payload}
            }
        case GET_COUNT:
            return {
                ...state, count: action.count
            }
        case GET_ALL_PRICE:
            return {
                ...state, allPrice: action.sum
            }
        case CLEAR_CART:
            return {
                ...state, cartItems: {}, allPrice: 0, count: 0
            }
        case EDIT_CART:
            return {
                ...state, cartItems: action.payload
            }
        default:
            return state
    }
}

export default cartReducer