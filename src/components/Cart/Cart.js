import React from 'react';
import classes from './Cart.module.scss'
import CartItem from "./CartItem/CartItem";

import CartButton from "../UI/CartButton/CartButton";
import {connect} from "react-redux";
import {clearCart} from "../../store/actions/cart";

const Cart = (props) => {

    return (
        <div className={classes.Cart}>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <h1>Cart</h1>
                    <span
                        onClick={() => props.clearCart()}
                    >
                        Clear
                    </span>
                </div>
                {
                    Object.keys(props.cartItems).map(key=>
                        <CartItem
                            key={key}
                            pizzas={props.cartItems[key]}
                            typePizza={key}
                        />)
                }
                <div className={classes.total}>
                    <span>Total pizzas: <b>{props.count}</b></span>
                    <span>Order price: <b>{props.allPrice} $</b></span>
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

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        count: state.cart.count,
        allPrice: state.cart.allPrice

    }
}


const mapDispatchToProps = dispatch =>{
    return{
        clearCart: ()=> dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
