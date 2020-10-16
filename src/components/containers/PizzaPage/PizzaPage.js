import React, {useEffect} from 'react';
import classes from './PizzaPage.module.scss'
import Sort from "../../Sort/Sort";
import Filter from "../../Filter/Filter";
import Pizzas from "../../Pizzas/Pizzas";
import {connect} from "react-redux";
import {fetchPizzas, setCurrentPage} from "../../../store/actions/pizzas";
import Loader from "../../UI/Loader/Loader";
import classNames from 'classnames'


const PizzaPage = ({
                       fetchPizzas,
                       setCurrentPage,
                       error,
                       filterPizzas,
                       loading,
                       type,
                       pageNumbers,
                       currentPage,
                       pizzasPerPage
                   }) => {

    let indexOfLastTodo = 0
    let indexOfFirstTodo = 0
    let currentPizzas = 0

    let renderPizzas = []

    if (!error) {

        indexOfLastTodo = currentPage * pizzasPerPage;
        indexOfFirstTodo = indexOfLastTodo - pizzasPerPage;
        currentPizzas = filterPizzas.slice(indexOfFirstTodo, indexOfLastTodo);

        renderPizzas = currentPizzas.map(pizza => {
            return pizza
        });
    }

    useEffect(() => {
        fetchPizzas()
    }, [fetchPizzas])


    const renderPageNumbers = pageNumbers.map(number => {
        const cls = classNames({
            [classes.active]: number === currentPage
        });

        return (
            <li
                key={number}
                onClick={() => setCurrentPage(number)}
                className={cls}
            >
                {number}
            </li>
        );
    });

    return (
        <div className={classes.PizzaPage}>
            {

                loading
                    ? <Loader/>
                    : error
                    ? <div> {error.toString()}</div>
                    :

                    <>
                        <div className={classes['pizza-nav']}>
                            <Filter/>
                            <Sort/>
                        </div>

                        {
                            type && <h1>{type.title}</h1>
                        }
                        <Pizzas pizzas={renderPizzas}></Pizzas>
                        {
                            pageNumbers.length > 0
                            &&
                            <ul className={classes.pages}>
                                {renderPageNumbers}
                            </ul>
                        }
                    </>

            }
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        error: state.pizzas.error,
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