import React, {useContext} from 'react';
import classes from './CartButto.module.scss'
import cart from '../../img/cart-svg.svg'
import {NavLink} from "react-router-dom";
import Context from "../../context";

const CartButton = (props) => {
    const {count, allPrice}=useContext(Context)

    return (
        <NavLink
            to={'/cart'}
            exact={true}
            activeClassName={classes.active}
            className={classes.CartButton}>
            {allPrice} $ <span>|</span> { <img src={cart} alt='cart'/>} {count}
        </NavLink>
    )
};

export default CartButton;