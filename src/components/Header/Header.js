import React, {useContext} from 'react';
import classes from './Header.module.scss'
import logo from '../../img/pizza.svg'
import CartButton from "../UI/CartButton/CartButton";
import {NavLink} from "react-router-dom";
import Context from "../../context";
import cart from "../../img/cart-svg.svg";

const Header = (props) => {
    const {count, allPrice}=useContext(Context)

    return (
        <div className={classes.Header}>
            <div className={classes['logo-wrapper']}>
                <div className={classes.logo}>
                    <NavLink
                        to={'/'}
                        exact={true}
                    ><img src={logo} alt="logo"/></NavLink>
                </div>
                <div className={classes['company-name']}>
                    <div className={classes['title']}>Delight pizza</div>
                    <span className={classes['subtitle']}>the most delicious pizza :)</span>
                </div>
            </div>
            <CartButton
            type={'main-cart'}
            path={'/cart'}
            >

                {allPrice} $ <span>|</span> { <img src={cart} alt='cart'/>} {count}

            </CartButton>
        </div>
    )
};

export default Header;