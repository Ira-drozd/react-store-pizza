import React from 'react';
import classes from './Header.module.scss'
import logo from '../../img/pizza.svg'
import CartButton from "../CartButton/CartButton";
import {NavLink} from "react-router-dom";

const Header = (props) => {
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
            <CartButton/>
        </div>
    )
};

export default Header;