import React, {useContext} from 'react';
import classes from './CartButto.module.scss'
import {NavLink} from "react-router-dom";

const CartButton = (props) => {
    const cls=[classes.CartButton]
    if(props.type){
        cls.push(classes[props.type])
    }

    return (
        <NavLink
            to={props.path || '/'}
            exact={true}
            activeClassName={classes.active}
            className={cls.join(' ')}>
            {
                props.children
            }
        </NavLink>
    )
};

export default CartButton;