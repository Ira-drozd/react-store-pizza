import React from 'react';
import classes from './AddButton.module.scss'

const AddButton = (props) => {
    return (
        <button
            onClick={props.getCartItem}
            className={classes.AddButton}
        >
            {props.children}
        </button>
    )
};

export default AddButton;