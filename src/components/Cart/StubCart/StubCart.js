import React from 'react';
import classes from './StubCart.module.scss'
import stub from '../../../img/shopping-cart-colour 1.svg'
import CartButton from "../../UI/CartButton/CartButton";

const StubCart = (props) => {
    return (
        <div className={classes.StubCart}>
            <h2>Cart is empty</h2>
            <img src={stub} alt="stub"/>
            <CartButton
            type={'stub'}
            >
                Go back
            </CartButton>
        </div>
    )
};

export default StubCart;