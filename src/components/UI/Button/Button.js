import React from 'react';
import classes from './Button.module.scss'
import classNames from 'classnames'

const Button = ({children, type, active, subtype, onClick, disabled}) => {
    const cls = classNames({
        [classes.Button]: true,
        [classes[type]]: type,
        [classes.active]: active,
        [classes[subtype]]: subtype
    })
    return (
        <button
            className={cls}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
};

export default Button;