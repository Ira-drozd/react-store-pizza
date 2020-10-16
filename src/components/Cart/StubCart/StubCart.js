import React from 'react';
import classes from './StubCart.module.scss'
import stub from '../../../img/shopping-cart-colour 1.svg'
import CustomNavLink from "../../UI/CustomNavLink/CustomNavLink";
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
            <CustomNavLink
                type={'stub'}
            >
                Go back
            </CustomNavLink>
        </div>
    )
};

export default StubCart;