import React from 'react';
import classes from './CustomNavLink.module.scss'
import {NavLink} from "react-router-dom";
import classNames from "classnames";

const CustomNavLink = ({type, path, children}) => {
    const cls = classNames({
        [classes.CartButton]: true,
        [classes[type]]:type
    });

    return (
        <NavLink
            to={path || '/'}
            exact={true}
            activeClassName={classes.active}
            className={cls}
        >
            {
                children
            }
        </NavLink>
    )
};

export default CustomNavLink;