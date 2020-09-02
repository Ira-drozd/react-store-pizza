import React, {useContext} from 'react';
import classes from './Cart.module.scss'
import Context from "../../context";
import CartItem from "./CartItem/CartItem";

import CartButton from "../UI/CartButton/CartButton";

const Cart = (props) => {
    const {
        cartItems,
        count,
        allPrice,
        clearCart
    } = useContext(Context)


    return (
        <div className={classes.Cart}>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <h1>Cart</h1>
                    <span
                        onClick={() => clearCart()}
                    >
                        Clear
                    </span>
                </div>
                {
                    Object.keys(cartItems).map(key=>
                        <CartItem key={key} pizzas={cartItems[key]} typePizza={key}/>)
                }
                <div className={classes.total}>
                    <span>Total pizzas: <b>{count}</b></span>
                    <span>Order price: <b>{allPrice} $</b></span>
                </div>
            </div>
            <div className={classes['pay-wrapper']}>
                <CartButton
                    type={'light'}>
                    Go back
                </CartButton>
                <CartButton
                    type={'main-cart'}>
                    Pay now
                </CartButton>
            </div>
        </div>
    )
};

export default Cart;