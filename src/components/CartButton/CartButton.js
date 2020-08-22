import React from 'react';
import classes from './CartButto.module.scss'
import cart from '../../img/cart-svg.svg'
import {NavLink} from "react-router-dom";

const CartButton = (props) => {

    return (
        <NavLink
            to={'/cart'}
            exact={true}
            activeClassName={classes.active}
            className={classes.CartButton}>
            520 $ <span>|</span> { <img src={cart} alt='cart'/>} 3
        </NavLink>
    )
};

export default CartButton;