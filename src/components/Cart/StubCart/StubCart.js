import React from 'react';
import classes from './StubCart.module.scss'
import stub from '../../../img/shopping-cart-colour 1.svg'
import CartButton from "../../UI/CartButton/CartButton";
import {motion} from "framer-motion";

const StubCart = (props) => {
    return (
        <div className={classes.StubCart}>
            <h2>Cart is empty</h2>
            <motion.img
                initial={{x: '-100vh'}}
                animate={{x: 0}}
                transition={{duration: 0.5, type: "spring"}}
                src={stub}
                alt="stub"
            />
            <CartButton
                type={'stub'}
            >
                Go back
            </CartButton>
        </div>
    )
};

export default StubCart;