import React, {useEffect} from 'react';
import classes from './PizzaPage.module.scss'
import Sort from "../../Sort/Sort";
import Filter from "../../Filter/Filter";
import Pizzas from "../../Pizzas/Pizzas";
import {connect} from "react-redux";
import {fetchPizzas, setCurrentPage} from "../../../store/actions/pizzas";
import Loader from "../../UI/Loader/Loader";

const PizzaPage = (props) => {
    const {fetchPizzas, setCurrentPage} = props

    const indexOfLastTodo = props.currentPage * props.pizzasPerPage;
    const indexOfFirstTodo = indexOfLastTodo - props.pizzasPerPage;
    const currentPizzas = props.filterPizzas.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderPizzas = currentPizzas.map(pizza => {
        return pizza
    });

    useEffect(() => {
        fetchPizzas()
    }, [fetchPizzas])

    const renderPageNumbers = props.pageNumbers.map(number => {
        const cls = []
        if (number === props.currentPage) {
            cls.push(classes.active)
        }

        return (
            <li
                key={number}
                onClick={() => setCurrentPage(number)}
                className={cls.join(' ')}
            >
                {number}
            </li>
        );
    });

    return (
        <div className={classes.PizzaPage}>
            <div className={classes['pizza-nav']}>
                <Filter/>
                <Sort/>
            </div>
            {
                props.type && <h1>{props.type.title}</h1>
            }
            {
                props.loading
                    ? <Loader/>
                    : <Pizzas pizzas={renderPizzas}/>
            }
            {
                props.pageNumbers.length > 0
                &&
                <ul className={classes.pages}>
                    {renderPageNumbers}
                </ul>
            }
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        pizzas: state.pizzas.pizzas,
        filterPizzas: state.pizzas.filterPizzas,
        loading: state.pizzas.loading,
        type: state.pizzas.type,
        pageNumbers: state.pizzas.pageNumbers,
        currentPage: state.pizzas.currentPage,
        pizzasPerPage: state.pizzas.pizzasPerPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPizzas: () => dispatch(fetchPizzas()),
        setCurrentPage: (page) => dispatch(setCurrentPage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage);