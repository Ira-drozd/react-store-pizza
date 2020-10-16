import {CLEAR_CART, EDIT_CART, GET_ALL_PRICE, GET_CART_ITEM, GET_COUNT, SET_MESSAGE} from "./actionTypes";
import {store} from "../../index";

export const getCartItem = (selectPizza) => (dispatch => {
    const newCartItems = store.getState().cart.cartItems

    const item = {
        [selectPizza.id]: [
            {
                id: Date.now(),
                name: selectPizza.name,
                price: selectPizza.price,
                imageURL: selectPizza.imageURL,
                size: selectPizza['size'].size,
                dough: selectPizza['dough'].dough,
                count: 1,
                allPrice: selectPizza.price,
                setPrice() {
                    return this.count * this.price
                }
            }
        ]
    }

    const keys = Object.keys(newCartItems)
    const keyItem = Object.keys(item)[0]
    const subItem = item[keyItem][0]
    let payload = {}
    let message = false

    if (keys.includes(keyItem)) {
        if (!newCartItems[keyItem].some(pizzaItem =>
            pizzaItem.size === subItem.size && pizzaItem.dough === subItem.dough)) {
            newCartItems[keyItem].push(subItem)//key
            payload = newCartItems
        } else {
            message = true
        }
    } else {
        dispatch(setMessage(''))
        payload = item
    }

    dispatch(setCartItem(payload))
    dispatch(getCount())
    dispatch(getAllPrice())
    dispatch(setMessage(message))
})

export const setMessage = (message) => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}

export const setCartItem = (payload) => {
    return {
        type: GET_CART_ITEM,
        payload
    }
}

export const getCount = () => {
    const cartItems = store.getState().cart.cartItems
    let count = 0

    for (let key in cartItems) {
        count += cartItems[key].reduce((acc, item) => (
            acc + item.count

        ), 0)
    }
    return {
        type: GET_COUNT,
        payload: count
    }
}

export const getAllPrice = () => {
    const cartItems = store.getState().cart.cartItems
    let sum = 0
    for (let key in cartItems) {
        sum += cartItems[key].reduce((acc, item) => (
            acc + item.allPrice

        ), 0)
    }
    return {
        type: GET_ALL_PRICE,
        payload: sum
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const editCart = (payload) => {
    return {
        type: EDIT_CART,
        payload
    }
}

export const deleteCartItem = (selectPizza) => (dispatch => {

    const newCartItems = store.getState().cart.cartItems

    const allPizzas = newCartItems[selectPizza.typePizza]
    const deletePizza = allPizzas.filter(pizza =>
        pizza.id !== selectPizza.pizzaId
    )

    const payload = {...newCartItems}

    if (deletePizza.length) {
        const newItem = {[selectPizza.typePizza]: deletePizza}
        Object.assign(payload, newItem)
    } else {
        delete payload[selectPizza.typePizza]
    }

    dispatch(editCart(payload))
    dispatch(getCount())
    dispatch(getAllPrice())
})

export const addCartItem = (selectPizza) => (dispatch => {

    const newCartItems = store.getState().cart.cartItems
    const allPizzas = newCartItems[selectPizza.typePizza]

    const addPizza = allPizzas.map(pizza => {
            if (pizza.id === selectPizza.pizzaId) {
                pizza.count = pizza.count + 1
                pizza.allPrice = pizza.setPrice()
            }
            return pizza
        }
    )

    let payload = {}

    const newItem = {[selectPizza.typePizza]: addPizza}
    Object.assign(payload, newCartItems, newItem)

    dispatch(editCart(payload))
    dispatch(getCount())
    dispatch(getAllPrice())
})

export const subCartItem = (selectPizza) => (dispatch => {

    const newCartItems = store.getState().cart.cartItems
    const allPizzas = newCartItems[selectPizza.typePizza]

    const subPizza = allPizzas.map(pizza => {
            if (pizza.id === selectPizza.pizzaId) {
                if (pizza.count > 1) {
                    pizza.count = pizza.count - 1
                    pizza.allPrice = pizza.setPrice()
                }
            }
            return pizza
        }
    )

    let payload = {}

    const newItem = {[selectPizza.typePizza]: subPizza}
    Object.assign(payload, newCartItems, newItem)

    dispatch(editCart(payload))
    dispatch(getCount())
    dispatch(getAllPrice())

})

