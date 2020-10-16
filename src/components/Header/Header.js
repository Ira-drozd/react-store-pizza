import React from 'react';
import classes from './Header.module.scss'
import logo from '../../img/pizza.svg'
import CustomNavLink from "../UI/CustomNavLink/CustomNavLink";
import cart from "../../img/cart-svg.svg";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const Header = ({count, allPrice}) => {
    return (
        <div className={classes.Header}>
            <div className={classes['logo-wrapper']}>
                <div className={classes.logo}>
                    <NavLink
                        to={'/'}
                        exact={true}
                    >
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <div className={classes['company-name']}>
                    <div className={classes['title']}>Delight pizza</div>
                    <span className={classes['subtitle']}>the most delicious pizza :)</span>
                </div>
            </div>

            <CustomNavLink
                type={'main-cart'}
                path={'/cart'}
            >
                ${allPrice} <span>|</span>
                {<img src={cart} alt='cart'/>}
                {count}
            </CustomNavLink>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        count: state.cart.count,
        allPrice: state.cart.allPrice
    }
}

export default connect(mapStateToProps)(Header);