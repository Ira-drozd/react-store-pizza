import {
    FETCH_PIZZAS_ERROR,
    FETCH_PIZZAS_START,
    FETCH_PIZZAS_SUCCESS,
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_TYPE, SET_CURRENT_PAGE, SET_FILTER, SET_PAGE_NUMBERS, SET_SORT
} from "../actions/actionTypes";

const initialState = {
    pizzas: [],
    filterPizzas: [],
    currentPage: 1,
    pizzasPerPage: 8,
    pageNumbers: [],
    loading: false,
    error: null,
    types: [
        {
            id: 1,
            title: 'All'
        }, {
            id: 2,
            title: 'Meat'
        },
        {
            id: 3,
            title: 'Grill'
        },
        {
            id: 4,
            title: 'Spicy'
        },
        {
            id: 5,
            title: 'Vegetarian'
        },
        {
            id: 6,
            title: 'Closed'
        }
    ],
    type: {
        id: 1,
        title: 'All'
    },
    category: ''
}

export default function pizzasReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PIZZAS_START:
            return {
                ...state, loading: true
            }
        case FETCH_PIZZAS_SUCCESS:
            return {
                ...state, loading: false, pizzas: action.payload, filterPizzas: action.payload
            }
        case FETCH_PIZZAS_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case SET_ACTIVE_TYPE:
            return {
                ...state, type: action.payload
            }
        case SET_ACTIVE_CATEGORY:
            return {
                ...state, category: action.payload
            }
        case SET_FILTER:
            return {
                ...state, filterPizzas: action.payload, category: '', currentPage: 1
            }
        case SET_SORT:
            return {
                ...state, filterPizzas: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload
            }
        case SET_PAGE_NUMBERS:
            return {
                ...state, pageNumbers: action.payload
            }
        default:
            return state
    }
}