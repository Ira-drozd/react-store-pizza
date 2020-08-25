import React from 'react';
import PizzaItem from "./PizzaItem/PizzaItem";
import classes from './Pizzas.module.scss'

const Pizzas = ({pizzas}) => {
    return (

        <div className={classes.Pizzas}>
            {
                pizzas.map(pizza=>
                    <PizzaItem key={pizza.id} pizza={pizza}/>
                )
            }

        </div>)
};

export default Pizzas;