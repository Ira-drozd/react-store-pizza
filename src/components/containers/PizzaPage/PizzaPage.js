import React, {useEffect} from 'react';
import classes from './PizzaPage.module.scss'
import Sort from "../../Sort/Sort";
import Filter from "../../Filter/Filter";
import Pizzas from "../../Pizzas/Pizzas";
import {connect} from "react-redux";
import {fetchPizzas} from "../../../store/actions/pizzas";

const PizzaPage = (props) => {
    const {fetchPizzas}=props
    useEffect(()=>{
        fetchPizzas()
    },[fetchPizzas])

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
                    ? <h1>Loading...</h1>
                    : <Pizzas pizzas={props.filterPizzas}/>
            }

        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        pizzas: state.pizzas.pizzas,
        filterPizzas: state.pizzas.filterPizzas,
        loading: state.pizzas.loading,
        type: state.pizzas.type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPizzas: () => dispatch(fetchPizzas())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage);