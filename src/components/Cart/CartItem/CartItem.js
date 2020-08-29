import React, {useContext} from 'react';
import classes from './CartItem.module.scss'
import EditButton from "../../UI/EditButton/EditButton";
import Context from "../../../context";

const CartItem = ({pizzas, typePizza}) => {

    const {deletePizza, addPizza, subPizza} = useContext(Context)

    const pizza = () => {
        if (pizzas) {
            return pizzas.map((pizza, index) =>
                <div
                    key={index}
                    className={classes.CartItem}
                >
                    <div className={classes.preview}>
                        <img src={pizza.imageURL} alt="pizza"/>
                        <div>
                            <p>{pizza.name}</p>
                            <span>{pizza.dough}, {pizza.size} sm.</span>
                        </div>
                    </div>

                    <div className={classes.edit}>
                        <div className={classes.counter}>
                            <EditButton
                                clickHandler={() => subPizza(
                                    {
                                        pizzaId: pizza.id,
                                        typePizza
                                    }
                                )}
                                color={'edit'}
                            >
                                <span>-</span>
                            </EditButton>
                            {pizza.count}
                            <EditButton
                                clickHandler={() => addPizza(
                                    {
                                        pizzaId: pizza.id,
                                        typePizza
                                    }
                                )}
                                color={'edit'}
                            >
                                <span>+</span>
                            </EditButton>
                        </div>
                        <div className={classes.price}>
                            {pizza.allPrice} $
                            <EditButton
                                clickHandler={() =>
                                    deletePizza(
                                        {
                                            pizzaId: pizza.id,
                                            typePizza
                                        }
                                    )}
                                color={'delete'}
                            >
                                <span>&#215;</span>
                            </EditButton>
                        </div>
                    </div>

                </div>
            )
        }
    }

    return (
        <div>
            {
                pizza()
            }
        </div>
    )
};

export default CartItem;