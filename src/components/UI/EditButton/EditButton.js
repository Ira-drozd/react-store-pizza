import React from 'react';
import classes from './EditButton.module.scss'

const EditButton = (props) => {
    const cls = [classes.EditButton]
    if (props.color) {
        cls.push(classes[props.color])
    }

    return (
        <button
            className={cls.join(' ')}
            onClick={props.clickHandler}
        >
            {props.children}
        </button>
    )
};

export default EditButton;