import {
    FETCH_PIZZAS_ERROR,
    FETCH_PIZZAS_START,
    FETCH_PIZZAS_SUCCESS,
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_TYPE, SET_CURRENT_PAGE,
    SET_FILTER, SET_PAGE_NUMBERS, SET_SORT
} from "./actionTypes";
import {store} from "../../index";
import axios from 'axios'

export const fetchPizzas = () => (async dispatch => {
    dispatch(fetchPizzasStart())
    try {
        const response = await axios.get("https://react-store-pizza.firebaseio.com/pizzas.json")
        dispatch(
            fetchPizzasSuccess(response.data)
        )
        dispatch(
            setPageNumbers()
        )

    } catch (e) {
        dispatch(fetchPizzasError(e))
    }
})

export function fetchPizzasStart() {
    return {
        type: FETCH_PIZZAS_START
    }
}

export function fetchPizzasSuccess(pizzas) {
    return {
        type: FETCH_PIZZAS_SUCCESS,
        payload: pizzas
    }
}

export function fetchPizzasError(err) {
    return {
        type: FETCH_PIZZAS_ERROR,
        payload: err
    }
}

export const setActiveType = (selectType) => {
    store.dispatch(filterPizzas(selectType.id))
    store.dispatch(
        setPageNumbers()
    )

    return {
        type: SET_ACTIVE_TYPE,
        payload: selectType
    }
}


export const setActiveCategory = (selectCategory) => {
    store.dispatch(sortPizzas(selectCategory))
    return {
        type: SET_ACTIVE_CATEGORY,
        payload: selectCategory
    }
}

export const filterPizzas = (typeId) => {
    const pizzas = store.getState().pizzas.pizzas
    let newPizzas = []

    if (typeId === 1) {
        newPizzas = pizzas
    } else {
        newPizzas = pizzas.filter(pizza =>
            (pizza.type.some(el => el === typeId))
        )
    }
    return {
        type: SET_FILTER,
        payload: newPizzas
    }
}

export const sortPizzas = (category) => {
    const filterPizzas = store.getState().pizzas.filterPizzas

    const mappedPizzas = filterPizzas.map(function (el, i) {
        return {index: i, value: el[category]};
    });

    mappedPizzas.sort(function (a, b) {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;
    });

    const sortPizzas = mappedPizzas.map(function (el) {
        return filterPizzas[el.index];
    });

    return {
        type: SET_SORT,
        payload: sortPizzas
    }
}

export const setPageNumbers = () => {
    const pageNumbers = [];
    const pizzas = store.getState().pizzas.filterPizzas.length
    const pizzasPerPage = store.getState().pizzas.pizzasPerPage
    for (let i = 1; i <= Math.ceil(pizzas / pizzasPerPage); i++) {
        pageNumbers.push(i);
    }
    return {
        type: SET_PAGE_NUMBERS,
        payload: pageNumbers
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}


