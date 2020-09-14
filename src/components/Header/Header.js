import React from 'react';
import classes from './Header.module.scss'
import logo from '../../img/pizza.svg'
import CartButton from "../UI/CartButton/CartButton";
import {NavLink} from "react-router-dom";
import cart from "../../img/cart-svg.svg";
import {connect} from "react-redux";

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

            <CartButton
                type={'main-cart'}
                path={'/cart'}
            >
                ${props.allPrice} <span>|</span>
                {<img src={cart} alt='cart'/>}
                {props.count}
            </CartButton>
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