import React, {useState} from 'react';
import PizzaItem from "./PizzaItem/PizzaItem";
import classes from './Pizzas.module.scss'
import Modal from "./Modal/Modal";

const Pizzas = ({pizzas}) => {
    const [selectDescription, setSelectDescription] = useState(null)

    return (
        <div className={classes.Pizzas}>
            {
                pizzas.map(pizza =>
                    <PizzaItem
                        key={pizza.id}
                        pizza={pizza}
                        setSelectDescription={setSelectDescription}
                    />
                )
            }
            {
                selectDescription &&
                <Modal
                    selectDescription={selectDescription}
                    setSelectDescription={setSelectDescription}
                />}
        </div>
    )
};

export default Pizzas;