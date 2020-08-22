import React, {useContext} from 'react';
import PizzaItem from "./PizzaItem/PizzaItem";
import classes from './Pizzas.module.scss'
import Context from "../../context";

const Pizzas = (props) => {
    const {pizzas} = useContext(Context)
    return (
        <div className={classes.Pizzas}>
            {
                pizzas.map(pizza=>
                    <PizzaItem key={pizza.id} pizza={pizza}/>
                )
            }

        </div>
    )
};

export default Pizzas;