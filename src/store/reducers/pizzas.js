import {
    FETCH_QUIZZES_ERROR,
    FETCH_QUIZZES_START,
    FETCH_QUIZZES_SUCCESS,
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
        case FETCH_QUIZZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QUIZZES_SUCCESS:
            return {
                ...state, loading: false, pizzas: action.pizzas, filterPizzas: action.pizzas
            }
        case FETCH_QUIZZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        case SET_ACTIVE_TYPE:
            return {
                ...state, type: action.selectType
            }
        case SET_ACTIVE_CATEGORY:
            return {
                ...state, category: action.selectCategory
            }
        case SET_FILTER:
            return {
                ...state, filterPizzas: action.newPizzas, category: ''
            }
        case SET_SORT:
            return {
                ...state, filterPizzas: action.sortPizzas
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_PAGE_NUMBERS:
            return {
                ...state, pageNumbers: action.pageNumbers
            }
        default:
            return state
    }
}