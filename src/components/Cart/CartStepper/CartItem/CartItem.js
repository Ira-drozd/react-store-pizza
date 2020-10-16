import React from 'react';
import classes from './CartItem.module.scss'
import {connect} from "react-redux";
import {addCartItem, deleteCartItem, subCartItem} from "../../../../store/actions/cart";
import Button from "../../../UI/Button/Button";


const CartItem = ({pizzas, typePizza, deleteCartItem, addCartItem, subCartItem}) => {

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
                            <span>{pizza.dough}, {pizza.size} sm</span>
                        </div>
                    </div>

                    <div className={classes.edit}>
                        <div className={classes.counter}>
                            <Button
                            type='EditButton'
                            subtype='edit'
                            onClick={() =>
                                subCartItem(
                                    {
                                        pizzaId: pizza.id,
                                        typePizza
                                    }
                                )}
                            >
                                <span>-</span>
                            </Button>
                            {pizza.count}
                            <Button
                                type='EditButton'
                                subtype='edit'
                                onClick={() =>
                                    addCartItem(
                                        {
                                            pizzaId: pizza.id,
                                            typePizza
                                        }
                                    )}
                            >
                                <span>+</span>
                            </Button>
                        </div>
                        <div className={classes.price}>
                            ${pizza.allPrice}
                            <Button
                                type='EditButton'
                                subtype='delete'
                                onClick={() =>
                                    deleteCartItem(
                                        {
                                            pizzaId: pizza.id,
                                            typePizza
                                        }
                                    )}
                            >
                                <span>&#215;</span>
                            </Button>
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

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCartItem: selectPizza => dispatch(deleteCartItem(selectPizza)),
        addCartItem: selectPizza => dispatch(addCartItem(selectPizza)),
        subCartItem: selectPizza => dispatch(subCartItem(selectPizza))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);