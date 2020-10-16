import React from 'react';
import classes from './CartPage.module.scss'
import Cart from "../../Cart/Cart";
import StubCart from "../../Cart/StubCart/StubCart";
import {connect} from "react-redux";

const CartPage = ({cartItems}) => {

    return (
        <div className={classes.CartPage}>
            {
                Object.keys(cartItems).length
                    ? <Cart/>
                    : <StubCart/>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartPage);