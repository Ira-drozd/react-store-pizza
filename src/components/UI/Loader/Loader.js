import React from 'react';
import classes from './Loader.module.scss'

const Loader = (props) => (
    <div className={classes.Loader}>
        <div className={classes['lds-spinner']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Loader;