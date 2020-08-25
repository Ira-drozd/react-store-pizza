import React, {useContext} from 'react';
import classes from './Cart.module.scss'
import Context from "../../context";
import CartItem from "./CartItem/CartItem";
import EditButton from "../UI/EditButton/EditButton";

const Cart = (props) => {
    const {
        cartItems,
        count,
        allPrice,
        setCartItems
    } = useContext(Context)

    const listPizza = Object.keys(cartItems).map(key=>
        <CartItem key={key} pizzas={cartItems[key]}/>)

    return (
        <div className={classes.Cart}>
            <div className={classes.wrapper}>
                <h1>Cart</h1>
                {
                    listPizza
                }
            </div>
            <div className={classes['pay-wrapper']}>
                <EditButton
                    clickHandler={() => alert('hiii')}
                >
                    <span>+</span>
                </EditButton>
            </div>
        </div>
    )
};

export default Cart;