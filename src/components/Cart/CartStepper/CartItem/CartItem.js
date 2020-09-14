import React from 'react';
import classes from './CartItem.module.scss'
import EditButton from "../../../UI/EditButton/EditButton";
import {connect} from "react-redux";
import {addCartItem, deleteCartItem, subCartItem} from "../../../../store/actions/cart";


const CartItem = (props) => {
    const {pizzas, typePizza, deleteCartItem, addCartItem, subCartItem} = props

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
                            <EditButton
                                clickHandler={() =>
                                    subCartItem(
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
                                clickHandler={() =>
                                    addCartItem(
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
                            ${pizza.allPrice}
                            <EditButton
                                clickHandler={() =>
                                    deleteCartItem(
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