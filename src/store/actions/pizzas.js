import {
    FETCH_QUIZZES_START,
    FETCH_QUIZZES_SUCCESS,
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_TYPE,
    SET_FILTER, SET_SORT
} from "./actionTypes";
import {projectDatabase} from "../../firebase/config";
import {store} from "../../index";

export const fetchPizzas = () => (async dispatch => {
    dispatch(fetchPizzasStart())
    try {

        await projectDatabase.ref('pizzas/')
            .on('value', (snapshot) => {
                dispatch(
                    fetchPizzasSuccess(snapshot.val())
                    //console.log('snapshot',snapshot.val())
                )
            })

    } catch (e) {
        dispatch(fetchPizzasError(e))
    }
})

export function fetchPizzasStart() {
    return {
        type: FETCH_QUIZZES_START
    }
}

export function fetchPizzasSuccess(pizzas) {
    return {
        type: FETCH_QUIZZES_SUCCESS,
        pizzas
    }
}

export function fetchPizzasError(e) {
    return {
        type: FETCH_QUIZZES_SUCCESS,
        error: e
    }
}

export const setActiveType = (selectType) => {
    store.dispatch(filterPizzas(selectType.id))

    return {
        type: SET_ACTIVE_TYPE,
        selectType
    }
}


export const setActiveCategory = (selectCategory) => {
store.dispatch(sortPizzas(selectCategory))
    return {
        type: SET_ACTIVE_CATEGORY,
        selectCategory
    }
}

export const filterPizzas =  (typeId) =>  {
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
        newPizzas
    }
}

export const  sortPizzas = ( category) =>  {
    const filterPizzas = store.getState().pizzas.filterPizzas
    // let sortPizzas = []
    //
    //     sortPizzas=filterPizzas
    //
    // filterPizzas.sort(function (a, b) {
    //         if (a[category] > b[category]) {
    //             return 1;
    //         }
    //         if (a[category] < b[category]) {
    //             return -1;
    //         }
    //         // a должно быть равным b
    //         return 0;
    //     });
    // sortPizzas=filterPizzas

    var list = store.getState().pizzas.filterPizzas

// временный массив содержит объекты с позицией и значением сортировки
    var mapped = list.map(function(el, i) {
        return { index: i, value: el[category] };
    });

// сортируем массив, содержащий уменьшенные значения
    mapped.sort(function(a, b) {
        if (a.value > b.value) {
            return 1; }
        if (a.value < b.value) {
            return -1; }
        return 0;
    });

// контейнер для результа
    var sortPizzas = mapped.map(function(el) {
        return list[el.index];
    });

   // console.log(result)

    return {
        type: SET_SORT,
        sortPizzas
    }
}


