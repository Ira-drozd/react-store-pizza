import React, {useContext} from 'react';
import classes from './CartPage.module.scss'
import Context from "../../../context";
import CartItem from "../../Cart/CartItem/CartItem";
import EditButton from "../../UI/EditButton/EditButton";
import Cart from "../../Cart/Cart";
import StubCart from "../../Cart/StubCart/StubCart";

const CartPage = (props) => {
    const {
        cartItems
    } = useContext(Context)



    console.log(cartItems)

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

export default CartPage;